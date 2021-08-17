<?php
    class Community
    {

        private $conn;

        public $db_table = "";

        public $street;
        public $blind;
        public $alley;
        public $house;
        public $latitude;
        public $longitude;

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


        public function getSingleEmployee()
        {
            $sqlQuery = "SELECT street,blind,alley,house,latitude,longitude FROM" . $this->db_table . "WHERE id = ? LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->name = $dataRow['name'];
            $this->email = $dataRow['email'];
            $this->age = $dataRow['age'];
            $this->designation = $dataRow['designation'];
            $this->created = $dataRow['created'];
        }

    }

