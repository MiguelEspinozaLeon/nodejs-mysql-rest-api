CREATE DATABASE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)


);

INSERT INTO employee (name, salary) VALUES 
    ('Miguel', 5900),
    ( 'Luis', 7900),
    ( 'Daniel', 6900),
    ( 'Mario', 5200);