<?php

class Community
{

    private $conn;

    public $db_table = "";
//
    public $id;
//        public $blind;
//        public $alley;
//        public $house;
//        public $latitude;
//        public $longitude;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getCommunityData()
    {
        $sqlQuery = "SELECT id,street, blind, alley, house, latitude, longitude FROM " . $this->db_table;
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    public function getChurches()
    {
        $sqlQuery = "SELECT id,name, latitude, longitude FROM " . $this->db_table;
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }


    public function getChurcheById()
    {

        $sqlQuery = "SELECT id,name ,latitude, longitude FROM " . $this->db_table . " WHERE  name = ?";

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        if (empty($dataRow)) {
            $sqlQuery = "SELECT id,name ,latitude, longitude FROM  vernashen_tourist_places WHERE  name = ?";
            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        }


        $this->id = $dataRow['id'];
        $this->name = $dataRow['name'];
        $this->latitude = $dataRow['latitude'];
        $this->longitude = $dataRow['longitude'];

    }

}

