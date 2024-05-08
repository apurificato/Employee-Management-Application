-- USE employee_management_db;

-- Get all employees by role or department.
SELECT
    employee.first_name,
    employee.last_name,
    role.title AS role_title,
    department.name AS department_name
    FROM employee
        JOIN role
            ON employee.role_id = role.id
        JOIN department
            ON role.department_id = department.id
    WHERE role.id = 1;

SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    role.title AS role_title,
    department.name AS department_name,
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
        JOIN role
            ON employee.role_id = role.id
        JOIN department
            ON role.department_id = department.id
        LEFT JOIN employee manager
            ON employee.manager_id = manager.id