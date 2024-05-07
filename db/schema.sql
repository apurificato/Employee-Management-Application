\c postgres;

DROP DATABASE IF EXISTS employee_management_db;
CREATE DATABASE employee_management_db;

\c employee_management_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL UNIQUE,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,  -- gotta see if this is INT or INTEGER bc homework says INTEGER
    FOREIGN KEY (department_id)
        REFERENCES department(id)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, -- gotta see if this is INT or INTEGER bc homework says INTEGER
    manager_id INT NOT NULL,
    FOREIGN KEY (employee_id)
        REFERENCES employee(id)
);