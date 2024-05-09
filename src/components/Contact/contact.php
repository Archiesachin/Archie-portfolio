<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Here you can perform additional validation or sanitization of the data

    // Send email
    $to = "archieshah8767@gmail.com"; // Change this to your email address
    $headers = "From: $name <$email>";
    $body = "Subject: $subject\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo "Message sent successfully!";
    } else {
        // Failed to send email
        echo "Oops! Something went wrong.";
    }
}
?>
