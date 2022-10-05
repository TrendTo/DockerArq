<?php
$mysqli = new mysqli("db", "root", "admin", "info");
if($mysqli->connect_errno){
    echo "Fallo al conectar a MySQL: " . $mysqli->connect_errno .")". $mysqli->connect_error;
}

echo $mysqli->host_info . "</br>";

$mysqli = new mysqli("db", "root", "admin", "info", 3306);
if($mysqli -> connect_errno){
    echo "Fallo al conectar a MySQL: " . $mysqli->connect_errno .")". $mysqli->connect_error;
}

echo $mysqli->host_info . "</br>";
