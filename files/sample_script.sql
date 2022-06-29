CREATE TABLE `Member` (
  `Member_id` int,
  `Name` char(50),
  `Address` char(100),
  `Telephone_number` char(15),
  `NIC` char(20),
  `No_of_family_members` int,
  PRIMARY KEY (`Member_id`)
);

CREATE TABLE `Incharge_board` (
  `Title_code` int,
  `Member_id` int,
  FOREIGN KEY (`Member_id`) REFERENCES `Member`(`Member_id`)
);

CREATE TABLE `Funeral` (
  `Money_passing_id` int,
  `Member_id` int,
  `Funeral_id` int,
  `Relation` char(20),
  `Date` date,
  `Amount` double,
  `Note` char(100),
  PRIMARY KEY (`Money_passing_id`),
  FOREIGN KEY (`Member_id`) REFERENCES `Member`(`Member_id`)
);

CREATE TABLE `Income` (
  `Bill_number` int,
  `Catergory_code` int,
  `Amount` double,
  `Name` char(50),
  `Date` date,
  `Note` char(100),
  PRIMARY KEY (`Bill_number`)
);

CREATE TABLE `Construction` (
  `Bill_number` int,
  `Catergory_code` int,
  `Amount` double,
  `Date` date,
  `Note` char(200),
  PRIMARY KEY (`Bill_number`)
);

