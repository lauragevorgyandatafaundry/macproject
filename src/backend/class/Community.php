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

        public function getHotels()
        {
            $sqlQuery = "SELECT id,name, latitude, longitude FROM " . $this->db_table;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }


        public function getSellsProperties()
        {
            $sqlQuery = "SELECT id,name, latitude, longitude,status ,area FROM " . $this->db_table;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

    }

