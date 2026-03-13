<?php
$messageText = "";
$success = false;

// DB connection
$host = "localhost";      // your DB host
$db   = "your_db_name";   // your DB name
$user = "your_db_user";   // your DB user
$pass = "your_db_pass";   // your DB password

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die("DB Connection failed: " . $conn->connect_error);

// Functions for IP & Location
function getUserIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) $ip = $_SERVER['HTTP_CLIENT_IP'];
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else $ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
    $ip_list = explode(',', $ip);
    return trim($ip_list[0]);
}

function getUserLocation($ip) {
    $url = "http://ip-api.com/json/{$ip}?fields=status,country,regionName,city";
    $response = @file_get_contents($url);
    if ($response) {
        $data = json_decode($response, true);
        if ($data['status'] === 'success') {
            return "{$data['city']}, {$data['regionName']}, {$data['country']}";
        }
    }
    return "Unknown Location";
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var(trim($_POST['email'] ?? ""), FILTER_SANITIZE_EMAIL);
    $userType = strip_tags(trim($_POST['type'] ?? $_POST['waitlist-type'] ?? "Not specified"));
    $user_ip = getUserIP();
    $user_location = getUserLocation($user_ip);

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $messageText = "Invalid email address. Redirecting back...";
    } else {
        // Save to database
        $stmt = $conn->prepare("INSERT INTO waitlist_submissions (email, user_type, ip_address, location) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $email, $userType, $user_ip, $user_location);
        if ($stmt->execute()) {
            $messageText = "You're on the waitlist! We'll be in touch soon. Redirecting...";
            $success = true;
        } else {
            $messageText = "Oops! Something went wrong. Redirecting back...";
        }
        $stmt->close();
    }
} else {
    $messageText = "Invalid request method. Redirecting...";
}

$conn->close();
header("Refresh:3; url=/");
?>