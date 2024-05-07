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

INSERT INTO employee (first_name, last_name, role_id) VALUES
('Henry', 'Chang', 1),
('Bill', 'Sears', 2),
('Joseph', 'Smith', 3),
('Irene', 'Jeffries', 4),
('Patrick', 'Star', 5),
('Chris', 'Sherman', 6),
('Kelly', 'Farrell', 9),
('Sarah', 'Powers', 7),
('Mark', 'Thompson', 8),
('Melissa', 'Slater', 10);