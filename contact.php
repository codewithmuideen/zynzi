<?php
// Initialize variables
$messageText = "";
$success = false;

// Function to get user IP
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

// Function to get user location from IP
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

// Only process POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Capture and sanitize form fields
    $name = strip_tags(trim($_POST['name'] ?? ""));
    $email = filter_var(trim($_POST['email'] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST['message'] ?? "");

    // Get IP and Location
    $user_ip = getUserIP();
    $user_location = getUserLocation($user_ip);

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        $messageText = "Please complete all required fields. Redirecting back...";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $messageText = "Invalid email address. Redirecting back...";
    } else {
        // Prepare email
        $to = "hello@zynzi.app";
        $subject = "New Contact Form Submission from $name";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message:\n$message\n\n";
        $email_content .= "IP Address: $user_ip\n";
        $email_content .= "Location: $user_location\n";

        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $email_content, $headers)) {
            $messageText = "Thank you! Your message has been sent. Redirecting to home page...";
            $success = true;
        } else {
            $messageText = "Oops! Something went wrong. Redirecting back...";
        }
    }

} else {
    $messageText = "Invalid request method. Redirecting to home page...";
}

// Redirect after 3 seconds
header("Refresh:3; url=/");
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Submission</title>
<style>
/* Fullscreen gradient background */
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1F4494 0%, #3DA0E4 100%);
    font-family: 'Roboto', sans-serif;
}

/* Modal box */
.modal {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 30px 25px;
    max-width: 500px;
    width: 90%;
    text-align: center;
    box-shadow: 0 12px 28px rgba(0,0,0,0.3);
    animation: fadeIn 0.5s ease-in-out;
}

/* Icon */
.modal::before {
    content: '<?php echo $success ? "✔" : "✖"; ?>';
    display: block;
    font-size: 50px;
    color: <?php echo $success ? "#00C851" : "#ff4444"; ?>;
    margin-bottom: 15px;
}

/* Message text */
.modal p {
    font-size: 18px;
    color: #0F1C3A;
    margin: 0;
    line-height: 1.5;
}

/* Fade-in animation */
@keyframes fadeIn {
    from {opacity: 0; transform: translateY(-20px);}
    to {opacity:1; transform: translateY(0);}
}

/* Responsive */
@media (max-width: 500px) {
    .modal {
        padding: 25px 20px;
    }
    .modal p {
        font-size: 16px;
    }
}
</style>
</head>
<body>

<div class="modal">
    <p><?php echo htmlspecialchars($messageText); ?></p>
</div>

</body>
</html>