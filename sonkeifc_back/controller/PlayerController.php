<?php
include '../model/SonkeiModel.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

class PlayerController {
    public function getPlayers() {
        $sonkeiModel = new SonkeiModel();

        $resultado = $sonkeiModel -> getPlayers();
        $jugadores = array();

        if ($resultado) {
            while ($row = mysqli_fetch_assoc($resultado)) {
                $jugadores[] = $row;
            }
        } else {
            http_response_code(500);
            echo "Error al obtener las parcelas.";
            return;
        }

        $json = json_encode($jugadores);
        header('Content-Type: application/json');
        echo $json;
    }
}


$controller = new PlayerController();
$controller -> getPlayers();