USE employee_management_db;

-- Get all employees by role or department.
SELECT
    employee.first_name,
    employee.last_name,
    role.title AS role_title,
    department.name AS department_name
    FROM employee
        RIGHT JOIN role
            ON employee.role_id = role.id
        RIGHT JOIN department
            ON role.department_id = department.id
    WHERE role.id = 1;

-- SELECT
--     employee.id,
--     employee.first_name,
--     employee.last_name,
--     role.title AS role_title,
--     department.name AS department_name,
--     CONCAT(manager_id.first_name, '', manager_id.last_name) AS manager_id.employee
--     FROM employee
--         RIGHT JOIN role
--             ON employee.role_id = role.id
--         RIGHT JOIN department
--             ON role.department_id = department.id
--         RIGHT JOIN employee
--             ON employee.manager_id = employee.id
--     WHERE employee.id = 1;