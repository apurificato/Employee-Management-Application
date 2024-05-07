INSERT INTO departments (id, name) VALUES
(1, 'Accounting'),
(2, 'Technology'),
(3, 'Sales');
(4, 'Marketing');
(5, 'Management/Leadership');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Accountant', 50.000, 1),
(2, 'Controller', 100.000, 1),
(3, 'Developer', 75.000, 2),
(4, 'Telemarketer', 45.000, 3),
(5, 'Graphic Designer', 70.000, 2),
(6, 'Full Stack Engineer', 100.000, 2),
(7, 'VP of Sales', 70.000, 3),
(8, 'President', 250.000, 5),
(9, 'Content Publisher', 45.000, 5),
(10, 'Content Publisher', 45.000, 5),

INSERT INTO employees (id, first_name, last_name, role_id, management_id) VALUES
(1, 'Henry', 'Chang', 1, 1),
(2, 'Bill', 'Sears', 2, 1),
(3, 'Joseph', 'Smith', 3, 1),
(4, 'Irene', 'Jeffries', 4, 1),
(5, 'Patrick', 'Star', 5, 1),
(6, 'Chris', 'Sherman', 6, 1),
(7, 'Kelly', 'Farrell', 9, 1),
(8, 'Sarah', 'Powers', 7, 1),
(9, 'Mark', 'Thompson', 8, 1),
(10, 'Melissa', 'Slater', 10, 1),









INSERT INTO employees (id, name) VALUES
(1, 'Accounting'),
(2, 'Technology'),
(3, 'Sales');
(4, 'Marketing');
(5, 'Management/Leadership');


INSERT INTO roles (
    first_name,
    last_name,
    email,
    password,
    course_id
    ) VALUES
    ('John', 'Smith', 'jsmith@test.com', 'password123', 1),
    ('Jane', 'Doe', 'jdoe@test.com', 'password123', 1),
    ('Bob', 'Wilson', 'bwilson@test.com', 'password123', 3),
    ('Carol', 'Adams', 'cadams@test.com', 'password123', null);

    INSERT INTO roles (
    first_name,
    last_name,
    email,
    password,
    course_id
    ) VALUES
    ('John', 'Smith', 'jsmith@test.com', 'password123', 1),
    ('Jane', 'Doe', 'jdoe@test.com', 'password123', 1),
    ('Bob', 'Wilson', 'bwilson@test.com', 'password123', 3),
    ('Carol', 'Adams', 'cadams@test.com', 'password123', null);