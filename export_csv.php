<?php
$host = "localhost";
$db   = "your_db_name";
$user = "your_db_user";
$pass = "your_db_pass";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die("DB Connection failed: " . $conn->connect_error);

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=waitlist_submissions.csv');

$output = fopen('php://output', 'w');
fputcsv($output, array('ID', 'Email', 'User Type', 'IP Address', 'Location', 'Created At'));

$result = $conn->query("SELECT * FROM waitlist_submissions ORDER BY created_at DESC");
while ($row = $result->fetch_assoc()) {
    fputcsv($output, $row);
}

fclose($output);
$conn->close();
exit;
?>