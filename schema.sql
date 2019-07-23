-- DROP DATABASE chirpy;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

id Int(11) AUTO_INCREMENT NOT NULL,
`author` VARCHAR(255) NULL,
`body` VARCHAR(255) NULL,
`created_at` DATETIME NOT NULL,
-- TABLE CODE TO GO HERE
PRIMARY KEY (`id`)

);

select * from chirps