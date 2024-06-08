<?php
class Connection {

    public static function startConnection() {
        $server = "localhost";
        $user = "root";
        $pass = "";
        $db = "sonkeifc";
        $connection = mysqli_connect($server, $user, $pass, $db);

        return $connection;
    }
}
