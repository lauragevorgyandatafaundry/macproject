<?php
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");}
include_once '../config/database.php';
include_once '../class/Community.php';


$database = new Database();
$db = $database->getConnection();

$items = new Community($db);
$items->db_table = "gladzor_community";
$stmt = $items->getCommunityData();
$itemCount = $stmt->rowCount();


if ($itemCount > 0) {

    $employeeArr = array();
    $employeeArr["body"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $e = array(
            "id" => $id,
            "street" => $street,
            "blind" => $blind,
            "alley" => $alley,
            "house" => $house,
            "latitude" => $latitude,
            "longitude" => $longitude
        );

        array_push($employeeArr["body"], $e);
    }
    echo json_encode($employeeArr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
?>