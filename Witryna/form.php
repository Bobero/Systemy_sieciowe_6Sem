<?php
$conn = new mysqli('localhost', 'root','', 'sklep');

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['imie']);
    $email = $conn->real_escape_string($_POST['email']);
    $mssg = $conn->real_escape_string($_POST['wiadomosc']);

    $sql = "INSERT INTO zgloszenia (imie, email, wiadomosc) VALUES ('$name', '$email', '$mssg')";

    if ($conn->query($sql) === TRUE) {
        header("Location: ./kontakt.html");
    } else {
        echo "Błąd: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
