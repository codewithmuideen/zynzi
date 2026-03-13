<?php

$messageText = "";
$success = false;

/* DATABASE CONNECTION */
$host = "localhost";
$db   = "your_database";
$user = "your_db_user";
$pass = "your_db_password";

$conn = new mysqli($host,$user,$pass,$db);

if ($conn->connect_error) {
    die("Database connection failed");
}

/* GET USER IP */
function getUserIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
    }

    $ip_list = explode(',', $ip);
    return trim($ip_list[0]);
}

/* GET LOCATION */
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


/* HANDLE POST */
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = strip_tags(trim($_POST['name'] ?? ""));
    $email = filter_var(trim($_POST['email'] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST['message'] ?? "");

    $user_ip = getUserIP();
    $user_location = getUserLocation($user_ip);

    if (empty($name) || empty($email) || empty($message)) {

        $messageText = "Please complete all required fields. Redirecting back...";

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        $messageText = "Invalid email address. Redirecting back...";

    } else {

        /* SAVE TO DATABASE */

        $stmt = $conn->prepare("INSERT INTO contact_messages (name,email,message,ip_address,location) VALUES (?,?,?,?,?)");

        $stmt->bind_param("sssss",$name,$email,$message,$user_ip,$user_location);

        $stmt->execute();

        $stmt->close();


        /* SEND EMAIL */

        $to = "hello@zynzi.app";
        $subject = "New Contact Form Submission from $name";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message:\n$message\n\n";
        $email_content .= "IP Address: $user_ip\n";
        $email_content .= "Location: $user_location\n";

        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to,$subject,$email_content,$headers)) {

            $messageText = "Thank you! Your message has been sent. Redirecting to home page...";
            $success = true;

        } else {

            $messageText = "Message saved but email failed. Redirecting...";
            $success = true;
        }

    }

} else {

    $messageText = "Invalid request method. Redirecting to home page...";
}

$conn->close();

header("Refresh:3; url=/");

?>