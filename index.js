const inquirer = require('inquirer');
const pool = require('./db/client');
const colors = require('colors')
const figlet = require('figlet');

// Function to handle viewing all employees
async function viewAllEmployees() {
  try {
    const result = await pool.query('SELECT * FROM employee');
    console.table(result.rows);
    inquirer.prompt(questions)
    .then(answers => {
        const { menu } = answers;
        handleChoice(menu);
    })
    .catch((err) => {
        console.error('Error:', err);
    });
  } catch (error) {
    console.error('Error viewing employees:', error);
  }
}

// Function to handle adding an employee
async function addEmployee() {
    try {
      const employeeData = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: "Enter the employee's first name:",
        },
        {
          type: 'input',
          name: 'lastName',
          message: "Enter the employee's last name:",
        },
        {
            type: 'input',
            name: 'roleId',
            message: "Enter the employee's role id #:",
        }
      ]);
  
      // Once you have the employee data, insert it into the database
      await pool.query(
        'INSERT INTO employee (first_name, last_name, role_id) VALUES ($1, $2, $3)',
        [employeeData.firstName, employeeData.lastName, employeeData.roleId]
      );
      console.log('Employee added successfully!');
      inquirer.prompt(questions)
      .then(answers => {
          const { menu } = answers;
          handleChoice(menu);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
    } catch (error) {
      console.error('Error adding employee', error);
    }
  }  

// Function to handle updating an employee's role
async function updateEmployeeRole() {
    try {
      // Fetch all employees to display as choices
      const employees = await pool.query('SELECT * FROM employee');
      const employeeChoices = employees.rows.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
      }));
  
      // Prompt the user to select an employee to update
      const { employeeId } = await inquirer.prompt({
        type: 'list',
        name: 'employeeId',
        message: 'Select an employee to update:',
        choices: employeeChoices
      });
  
      // Fetch all roles to display as choices
      const roles = await pool.query('SELECT * FROM role');
      const roleChoices = roles.rows.map(role => ({
        name: role.title,
        value: role.id
      }));
  
      // Prompt the user to select a new role for the employee
      const { roleId } = await inquirer.prompt({
        type: 'list',
        name: 'roleId',
        message: 'Select a new role for the employee:',
        choices: roleChoices
      });
  
      // Update the employee's role in the database
      await pool.query(
        'UPDATE employee SET role_id = $1 WHERE id = $2',
        [roleId, employeeId]
      );
  
      console.log('Employee role updated successfully!');
      inquirer.prompt(questions)
      .then(answers => {
          const { menu } = answers;
          handleChoice(menu);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
    } catch (error) {
      console.error('Error updating employee role:', error);
    }
  }

// Function to handle viewing all employees
async function viewAllRoles() {
    try {
      const result = await pool.query('SELECT * FROM role');
      console.table(result.rows);
      inquirer.prompt(questions)
      .then(answers => {
          const { menu } = answers;
          handleChoice(menu);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
    } catch (error) {
      console.error('Error viewing roles:', error);
    }
  }

// Function to handle adding an employee
async function addRole() {
    try {
      const roleData = await inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter the role title:',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the role salary:',
        },
        // Add other prompts for role details as needed
      ]);
  
      // Once you have the role data, insert it into the database
      await pool.query(
        'INSERT INTO role (title, salary) VALUES ($1, $2)',
        [roleData.title, roleData.salary]
      );
  
      console.log('Role added successfully!');
      inquirer.prompt(questions)
      .then(answers => {
          const { menu } = answers;
          handleChoice(menu);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
    } catch (error) {
      console.error('Error adding role:', error);
    }
  }  

// Function to handle viewing all employees
async function viewAllDepartments() {
    try {
      const result = await pool.query('SELECT * FROM department');
      console.table(result.rows);
      inquirer.prompt(questions)
      .then(answers => {
          const { menu } = answers;
          handleChoice(menu);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
    } catch (error) {
      console.error('Error viewing departments:', error);
    }
  }
  
  // Function to handle adding an employee
  async function addDepartment() {
    try {
      const departmentData = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the department name:',
        },
        // Add other prompts for department details as needed
      ]);
  
      // Once you have the department data, insert it into the database
      await pool.query(
        'INSERT INTO department (name) VALUES ($1)',
        [departmentData.name]
      );
  
      console.log('Department added successfully!');
      inquirer.prompt(questions)
      .then(answers => {
          const { menu } = answers;
          handleChoice(menu);
      })
      .catch((err) => {
          console.error('Error:', err);
      });
    } catch (error) {
      console.error('Error adding department:', error);
    }
  }  


// Prompt For an Array of Questions For Menu Options/Directory
const questions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit',
            new inquirer.Separator(),
        ],
    },
];

function handleChoice(choice) {
    switch (choice) {
        case 'View All Employees':
            // Call function to view all employees
            viewAllEmployees()
            break;
        case 'Add Employee':
            // Call function to add an employee
            addEmployee()
            break;
        case 'Update Employee Role':
            // Call function to update employee role
            updateEmployeeRole()
            break;
        case 'View All Roles':
            // Call function to view all roles
            viewAllRoles()
            break;
        case 'Add Role':
            // Call function to add a role
            addRole()
            break;
        case 'View All Departments':
            // Call function to view all departments
            viewAllDepartments()
            break;
        case 'Add Department':
            // Call function to add a department
            addDepartment()
            break;
        case 'Quit':
            // Handle quit option
            console.log('Goodbye!');
            process.exit(0);
            break;
        default:
            console.log('Invalid choice');
            break;
    }
}

console.log(
    colors.bgBlack.brightGreen(
        figlet.textSync('Employee\nDatabase:', { horizontalLayout: 'full' })
    )
)

inquirer.prompt(questions)
    .then(answers => {
        const { menu } = answers;
        handleChoice(menu);
    })
    .catch((err) => {
        console.error('Error:', err);
    });