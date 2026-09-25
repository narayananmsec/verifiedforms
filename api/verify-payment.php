<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/config.php';

function json_response(array $data, int $status = 200): never
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

try {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!is_array($input)) {
        json_response(['success' => false, 'error' => 'Invalid request'], 400);
    }

    $orderId = trim((string) ($input['razorpay_order_id'] ?? ''));
    $paymentId = trim((string) ($input['razorpay_payment_id'] ?? ''));
    $signature = trim((string) ($input['razorpay_signature'] ?? ''));

    if ($orderId === '' || $paymentId === '' || $signature === '') {
        json_response(['success' => false, 'error' => 'Missing payment details'], 400);
    }

    $pdo = db();

    $stmt = $pdo->prepare(
        'SELECT id, document_id, amount, currency, status
         FROM orders
         WHERE razorpay_order_id = ?
         LIMIT 1'
    );
    $stmt->execute([$orderId]);
    $order = $stmt->fetch();

    if (!$order) {
        json_response(['success' => false, 'error' => 'Order not found'], 404);
    }

    if ($order['status'] === 'paid') {
        json_response([
            'success' => true,
            'status' => 'paid',
            'message' => 'Payment already verified'
        ]);
    }

    $expectedSignature = hash_hmac(
        'sha256',
        $orderId . '|' . $paymentId,
        razorpay_key_secret()
    );

    if (!hash_equals($expectedSignature, $signature)) {
        json_response(['success' => false, 'error' => 'Payment verification failed'], 400);
    }

    $update = $pdo->prepare(
        'UPDATE orders
         SET razorpay_payment_id = ?,
             razorpay_signature = ?,
             status = "paid",
             paid_at = CURRENT_TIMESTAMP
         WHERE id = ? AND status = "created"'
    );

    $update->execute([$paymentId, $signature, $order['id']]);

    if ($update->rowCount() !== 1) {
        $check = $pdo->prepare('SELECT status FROM orders WHERE id = ? LIMIT 1');
        $check->execute([$order['id']]);
        $current = $check->fetch();

        if (!$current || $current['status'] !== 'paid') {
            json_response(['success' => false, 'error' => 'Unable to record payment'], 500);
        }
    }

    json_response([
        'success' => true,
        'status' => 'paid',
        'order_id' => $orderId,
        'payment_id' => $paymentId,
        'document_id' => (int) $order['document_id'],
        'message' => 'Payment verified successfully'
    ]);
} catch (Throwable $e) {
    json_response(['success' => false, 'error' => 'Server error'], 500);
}
