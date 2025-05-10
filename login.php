<?php
include('db.php'); // Includes the database connection

if (isset($_POST['login'])) {
    // Get form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query the database to check if the username exists
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Password is correct, start session and login the user
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            // Redirect to homepage after successful login
            header("Location: Home Page.html");
            exit();
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "No user found with that username!";
    }

    $conn->close();
}
?>
