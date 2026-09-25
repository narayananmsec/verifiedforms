<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/config.php';

try {
    $pdo = db();
    $pdo->query('SELECT 1');
    echo json_encode([
        'success' => true,
        'service' => 'ServiceLocal API',
        'database' => 'connected'
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'service' => 'ServiceLocal API',
        'database' => 'connection_failed'
    ]);
}
