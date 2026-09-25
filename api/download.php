<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

$token = trim((string) ($_GET['token'] ?? ''));

if (!preg_match('/^[a-f0-9]{64}$/', $token)) {
    http_response_code(400);
    exit('Invalid download link.');
}

try {
    $pdo = db();

    $stmt = $pdo->prepare(
        'SELECT d.id, d.download_token, d.expires_at, doc.title, doc.file_path, doc.file_type
         FROM downloads d
         INNER JOIN documents doc ON doc.id = d.document_id
         INNER JOIN orders o ON o.id = d.order_id
         WHERE d.download_token = ?
           AND o.status = "paid"
           AND d.expires_at > CURRENT_TIMESTAMP
           AND doc.is_active = 1
         LIMIT 1'
    );
    $stmt->execute([$token]);
    $download = $stmt->fetch();

    if (!$download) {
        http_response_code(404);
        exit('Download link is invalid or expired.');
    }

    $relativePath = ltrim(str_replace(['\\', '..'], ['/',''], (string) $download['file_path']), '/');
    $baseDir = realpath(__DIR__ . '/../private-documents');

    if ($baseDir === false) {
        http_response_code(500);
        exit('Document storage is unavailable.');
    }

    $file = realpath($baseDir . DIRECTORY_SEPARATOR . $relativePath);

    if ($file === false || !is_file($file) || !str_starts_with($file, $baseDir . DIRECTORY_SEPARATOR)) {
        http_response_code(404);
        exit('Document file not found.');
    }

    $update = $pdo->prepare(
        'UPDATE downloads
         SET downloaded_at = CURRENT_TIMESTAMP
         WHERE id = ?'
    );
    $update->execute([$download['id']]);

    $title = preg_replace('/[^A-Za-z0-9._-]+/', '-', (string) $download['title']);
    $extension = strtolower((string) $download['file_type']) === 'docx' ? 'docx' : 'pdf';

    $mime = $extension === 'docx'
        ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        : 'application/pdf';

    header('Content-Type: ' . $mime);
    header('Content-Disposition: attachment; filename="' . $title . '.' . $extension . '"');
    header('Content-Length: ' . (string) filesize($file));
    header('X-Content-Type-Options: nosniff');

    readfile($file);
    exit;
} catch (Throwable $e) {
    http_response_code(500);
    exit('Download error.');
}
