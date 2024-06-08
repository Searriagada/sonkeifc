<?php
include('Connection.php');

class SonkeiModel {

    public function getPlayers() {
        $query = "SELECT * FROM `jugador`";
        $streamConnection = Connection::startConnection();
        $respuesta = mysqli_query($streamConnection, $query);
        mysqli_close($streamConnection);
        if ($respuesta) {
            return $respuesta;
        } else {
            echo "Error";
            return false;
        }
    }

    public function getTestimony() {
        $query = "SELECT * FROM `testimonio`";
        $streamConnection = Connection::startConnection();
        $respuesta = mysqli_query($streamConnection, $query);
        mysqli_close($streamConnection);
        if ($respuesta) {
            return $respuesta;
        } else {
            echo "Error";
            return false;
        }
    }
    public function getTraining() {
        $query = "SELECT * FROM `entrenamiento`";
        $streamConnection = Connection::startConnection();
        $respuesta = mysqli_query($streamConnection, $query);
        mysqli_close($streamConnection);
        if ($respuesta) {
            return $respuesta;
        } else {
            echo "Error";
            return false;
        }
    }
}
