-- Creating Database and table

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    buger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)