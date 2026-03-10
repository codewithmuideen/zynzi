<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name    = isset($input['name'])    ? trim($input['name'])    : '';
$email   = isset($input['email'])   ? trim($input['email'])   : '';
$subject = isset($input['subject']) ? trim($input['subject']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$to      = 'hello@zynzi.app';
$headers = implode("\r\n", [
    'From: Zynzi Contact <no-reply@zynzi.app>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
    'X-Mailer: PHP/' . phpversion(),
]);

$body = "New contact message from the Zynzi website.\n\n"
      . "Name:    {$name}\n"
      . "Email:   {$email}\n"
      . "Subject: {$subject}\n\n"
      . "Message:\n{$message}\n";

$sent = mail($to, '[Zynzi Contact] ' . $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}
