<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../class/Community.php';



$database = new Database();
$db = $database->getConnection();

$items = new Community($db);
$items->db_table="vernashen_churches";
$stmt = $items->getChurches();
$itemCount = $stmt->rowCount();



if($itemCount > 0){

    $employeeArr = array();
    $employeeArr["body"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $e = array(
            "name" => $name,
            "latitude" => $latitude,
            "longitude" => $longitude
        );

        array_push($employeeArr["body"], $e);
    }
    echo json_encode($employeeArr);
}

else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
?>
