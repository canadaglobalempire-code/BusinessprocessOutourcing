<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Replace this before publishing on PHP hosting.
const CONTACT_EMAIL = 'your-email@example.com';
const SITE_NAME = 'OutsourcePro';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

$clean = static function ($value, int $max = 4000): string {
    $text = trim((string) $value);
    $text = str_replace(["\r", "\0"], '', $text);
    return mb_substr($text, 0, $max);
};

$name = $clean($data['name'] ?? '', 150);
$email = filter_var($clean($data['email'] ?? '', 254), FILTER_VALIDATE_EMAIL);
$company = $clean($data['company'] ?? '', 200);
$service = $clean($data['service'] ?? '', 200);
$message = $clean($data['message'] ?? '', 5000);
$page = $clean($data['page'] ?? '', 500);

if ($name === '' || !$email || $service === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['message' => 'Please complete all required fields.']);
    exit;
}

if (CONTACT_EMAIL === 'your-email@example.com') {
    http_response_code(503);
    echo json_encode(['message' => 'Contact email is not configured yet.']);
    exit;
}

$subject = 'New website enquiry: ' . $service;
$body = "Name: {$name}\nEmail: {$email}\nCompany: {$company}\nService: {$service}\nPage: {$page}\n\nMessage:\n{$message}\n";
$headers = [
    'From: ' . SITE_NAME . ' Website <' . CONTACT_EMAIL . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail(CONTACT_EMAIL, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    echo json_encode(['message' => 'The server could not send the email.']);
    exit;
}

echo json_encode(['message' => "Thanks, {$name}! Your enquiry has been sent."]);
