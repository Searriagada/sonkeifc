<?php
include '../model/SonkeiModel.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

class TestimonyController {
    public function getTestimony() {
        $sonkeiModel = new SonkeiModel();

        $resultado = $sonkeiModel -> getTestimony();
        $testimonios = array();

        if ($resultado) {
            while ($row = mysqli_fetch_assoc($resultado)) {
                $testimonios[] = $row;
            }
        } else {
            http_response_code(500);
            echo "Error al obtener las parcelas.";
            return;
        }

        $json = json_encode($testimonios);
        header('Content-Type: application/json');
        echo $json;
    }
}


$controller = new TestimonyController();
$controller -> getTestimony();