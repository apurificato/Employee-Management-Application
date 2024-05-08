# Employee-Management-Application
Back-end Node.js application built with Express.js, Inquirer prompt, and PostgreSQL database for management of employee data. Application carries out parts of the CRUD (Create, Read, Update, Delete) Process for data in the database using query/seed.sql files, Express.js server routers, and an Inquirer prompt (which gives users a menu of options to view, update, or create data in the table).

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This back-end, simple employee database application was built fully from scratch with JavaScript and Node.js. The application uses SQL schema, seed, and query files to manually build out a database of tables. Additionally the PG node package was also used to interact with that postgreSQL database. Since this faux "employee management" database is back-end only and utilizes Node.js, it runs shell scripted commands in the terminal in order to connect to PostgreSQL database, create tables, seed those tables with data relational data, and then display all of it through user choices with the Inquirer prompt node package. All of this enables the user to connect to the database and go through parts of the CRUD (Create, Read, Update, and Delete) Process (in this case only reading, creating, and updating table data) via Node.js and the Inquirer prompt.

[
<img width="1440" alt="Employee-Database-Application-in-VSCode-Terminal-screenshot" src="https://github.com/apurificato/Employee-Management-Application/assets/161912493/9c441310-c734-4b31-b470-3744ed8e6530">
](url)

## Project Structure
- /db
    - schema.sql (file that creates database and databasde tables)
    - seed.sql (file that adds specific data to fill each of the tables in database)
    - query.sql (file that selects data in a table and can join tables by ID)
- index.js (main JavaScript file containing Inquirer prompt code and functions for choices in the prompt menu)
- /node_modules
- .gitignore (file that lists other files to be ignored by Github when pushing to repository, such as /node_modules folder)
- LICENSE (license used for this repository - MIT License)
- README (information file containing information about this specific project/application)
- package.json (file containing JSON npm dependencies and script commands)
- server.js (JavaScript file that sets up server)

## Tools and Technologies Used in This Project
- Javascript coding language
- Node JS (and node modules)
  - Express.js module (found on Expressjs.com)
  - PG module (found on https://node-postgres.com/)
  - Figlet module (found on http://www.figlet.org/)
  - Colors.js module (found on https://www.npmjs.com/package/colors)
- VS Code platform used to code and build pages
- Github (website hosted and deployed on Github servers)

## How to Use
Once user opens files for this project/application in VS Code platform, then they should start this back-end database program by opening their command line terminal and running "psql". This will connect the user to PostgreSQL, which has been enabled for this project. Once they have inputted their password ("pass"), they need to then initialize the schema.sql file, which will create a new database in PostgreSQL and also create each of the tables in the database. The command for this is "\i db/schema.sql;". Once that is done, the user then runs "\i db/seed.sql;" command, which will inject new rows and columns of specific data values for each of the tables in the database, in this case for each of the "Departments, Roles, and Employees" tables. 

* Note: ensuring that the database is connected and running can be confirmed by opening the DBeaver platform, which will show a Postgres table having been created. This is quicker than opening up pgAdmin program.

From this point on, the user would then continue on in the command line terminal (originally opened in VS Code) and run a "node index.js" command, which will start the Inquirer program. Using the Figlet and Colorsjs node packages have enabled this application to have a nicer interface, with a full, clear and colorized title in the CLI. The Inquirer prompt has been built out to be a menu that stays open in the CLI and loops until the user chooses to quit and exit the program. With Inquirer prompt running, the user now has a choice of menu options, enabling them to interact with the Employee Database.

Currently, their menu options in the prompt is a list of the following options:
- View All Employees (displays entire table for employees),
- Add Employee (starts another series of prompt inputs that results in new data values added for a new employee row),
- Update Employee Role (starts prompt allowing for input to update an employee's role by their id),
- View All Roles (displays entire table for roles),
- Add Role (starts another series of prompt inputs that results in new data values added for a new role row),
- View All Departments (displays entire table for departments),
- Add Department (starts another series of prompt inputs that results in new data values added for a new department row), and
- Quit (exits out of the directory/menu program)

## Contributions
- Application built from scratch Anthony Purificato
## Credits
- Rutgers Coding Bootcamp provided support and some of the resources for this project
- OpenAI ChatGPT utilized for general aid upon stuck and encountering errors with JavaScript code

## License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me on [LinkedIn](https://www.linkedin.com/in/apurificato/)

[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/apurificato/)
