<?php

$conn = new mysqli("localhost","your_db_user","your_db_password","your_database");

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename=contact_messages.csv');

$output = fopen("php://output","w");

fputcsv($output, ['ID','Name','Email','Message','IP','Location','Date']);

$result = $conn->query("SELECT * FROM contact_messages ORDER BY created_at DESC");

while($row = $result->fetch_assoc()){
    fputcsv($output,$row);
}

fclose($output);

$conn->close();

exit;