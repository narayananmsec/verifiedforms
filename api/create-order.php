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

    $documentId = filter_var($input['document_id'] ?? null, FILTER_VALIDATE_INT);

    if (!$documentId) {
        json_response(['success' => false, 'error' => 'Invalid document_id'], 400);
    }

    $pdo = db();

    $stmt = $pdo->prepare(
        'SELECT id, title, price, is_active
         FROM documents
         WHERE id = ? AND is_active = 1
         LIMIT 1'
    );
    $stmt->execute([$documentId]);
    $document = $stmt->fetch();

    if (!$document) {
        json_response(['success' => false, 'error' => 'Document not found'], 404);
    }

    $keyId = razorpay_key_id();
    $keySecret = razorpay_key_secret();

    if ($keyId === '' || $keySecret === '') {
        json_response(['success' => false, 'error' => 'Payment configuration missing'], 500);
    }

    $amountPaise = (int) round((float) $document['price'] * 100);

    if ($amountPaise < 100) {
        json_response(['success' => false, 'error' => 'Invalid document price'], 500);
    }

    $payload = json_encode([
        'amount' => $amountPaise,
        'currency' => 'INR',
        'receipt' => 'sl_' . $documentId . '_' . bin2hex(random_bytes(5)),
        'notes' => [
            'document_id' => (string) $documentId,
            'document_title' => $document['title'],
        ],
    ], JSON_UNESCAPED_SLASHES);

    $ch = curl_init('https://api.razorpay.com/v1/orders');

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
        ],
        CURLOPT_USERPWD => $keyId . ':' . $keySecret,
        CURLOPT_TIMEOUT => 20,
    ]);

    $response = curl_exec($ch);
    $curlError = curl_error($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($response === false || $curlError !== '') {
        json_response(['success' => false, 'error' => 'Unable to contact payment gateway'], 502);
    }

    $razorpayOrder = json_decode($response, true);

    if ($httpCode < 200 || $httpCode >= 300 || !is_array($razorpayOrder) || empty($razorpayOrder['id'])) {
        json_response(['success' => false, 'error' => 'Unable to create payment order'], 502);
    }

    $insert = $pdo->prepare(
        'INSERT INTO orders
            (document_id, razorpay_order_id, amount, currency, status)
         VALUES (?, ?, ?, ?, "created")'
    );

    $insert->execute([
        $documentId,
        $razorpayOrder['id'],
        $document['price'],
        'INR',
    ]);

    json_response([
        'success' => true,
        'key_id' => $keyId,
        'order_id' => $razorpayOrder['id'],
        'amount' => $amountPaise,
        'currency' => 'INR',
        'document' => [
            'id' => (int) $document['id'],
            'title' => $document['title'],
        ],
    ]);
} catch (Throwable $e) {
    json_response(['success' => false, 'error' => 'Server error'], 500);
}
