INSERT INTO departments (id, name) VALUES
(1, 'Accounting'),
(2, 'Technology'),
(3, 'Sales'),
(4, 'Marketing'),
(5, 'Management/Leadership');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Accountant', 50000.00, 1),
(2, 'Controller', 100000.00, 1),
(3, 'Developer', 75000.00, 2),
(4, 'Telemarketer', 45000.00, 3),
(5, 'Graphic Designer', 70000.00, 2),
(6, 'Full Stack Engineer', 100000.00, 2),
(7, 'VP of Sales', 70000.00, 3),
(8, 'President', 250000.00, 5),
(9, 'Content Publisher', 45000.00, 4),
(10, 'Marketing Specialist', 45000.00, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Henry', 'Chang', 1, 1),
(2, 'Bill', 'Sears', 2, 1),
(3, 'Joseph', 'Smith', 3, 1),
(4, 'Irene', 'Jeffries', 4, 1),
(5, 'Patrick', 'Star', 5, 1),
(6, 'Chris', 'Sherman', 6, 1),
(7, 'Kelly', 'Farrell', 9, 1),
(8, 'Sarah', 'Powers', 7, 1),
(9, 'Mark', 'Thompson', 8, 1),
(10, 'Melissa', 'Slater', 10, 1);