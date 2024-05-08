USE employee_management_db;

INSERT INTO department (name) VALUES
('Accounting'),
('Technology'),
('Sales'),
('Marketing'),
('Management/Leadership');

INSERT INTO role (title, salary, department_id) VALUES
('Accountant', 50000.00, 1),
('Controller', 100000.00, 1),
('Developer', 75000.00, 2),
('Telemarketer', 45000.00, 3),
('Graphic Designer', 70000.00, 2),
('Full Stack Engineer', 100000.00, 2),
('VP of Sales', 70000.00, 3),
('President', 250000.00, 5),
('Content Publisher', 45000.00, 4),
('Marketing Specialist', 45000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Henry', 'Chang', 1, 2),
('Bill', 'Sears', 2, 8),
('Joseph', 'Smith', 3, 6),
('Irene', 'Jeffries', 4, 7),
('Patrick', 'Star', 5, 8),
('Chris', 'Sherman', 6, NULL),
('Kelly', 'Farrell', 9, NULL),
('Sarah', 'Powers', 7, 8),
('Mark', 'Thompson', 8, NULL),
('Melissa', 'Slater', 10, 7);