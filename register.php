<?php
include('db.php'); // This includes the database connection file

if (isset($_POST['register'])) {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password for security

    // Prepare SQL query to insert data
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        // Successfully created account, now log in the user
        $user_id = $conn->insert_id; // Get the newly created user ID
        session_start();
        $_SESSION['user_id'] = $user_id;
        $_SESSION['username'] = $username;

        // Redirect to the homepage after successful registration
        header("Location: Home Page.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
