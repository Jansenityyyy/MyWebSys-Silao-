<?php
$servername = "localhost";
$username = "root"; // default username in XAMPP
$password = ""; // default password in XAMPP
$dbname = "vogue_essence";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
