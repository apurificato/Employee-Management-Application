# Employee-Management-Application
Back-end Node.js application built with Express.js, Inquirer prompt, and PostgreSQL database for management of employee data. Application carries out parts of the CRUD (Create, Read, Update, Delete) Process for data in the database using query/seed.sql files, Express.js server routers, and an Inquirer prompt (which gives users a menu of options to view, update, or create data in the table).

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This back-end e-commerce application was built off of some JavaScript start code, found here (https://github.com/coding-boot-camp/bookish-sniffle). The application uses the Sequelize and PG npms to interact and build out a postgreSQL database through JavaScript seed files, api routes, and models. Since this faux "e-commerce" database is back-end only and utilizes Node.js, it runs shell scripted commands in the terminal in order to connect to PostgreSQL database, seed the database with relational data, and then start a server locally. All of this enables the user to connect to the database and go through the CRUD (Create, Read, Update, and Delete) Process via server routes and Models that have been coded with JavaScript. Finally, the Insomnia.Rest platform was used to test each one of the server routes and carry out the entire CRUD process successfully with every step.

## Project Structure
- /config
    - connection.js (file containing code that enables a PostgreSQL database connection)
- /db
    - schema.sql (file that creates database table; fairly empty considering utilizing Sequelize which injects seed data and models)
- /models (folder containing JavaScript files that initialize models that will create rows/columns in database)
    - Category.js
    - Product.js
    - ProductTag.js
    - Tag.js
    - index.js
- /routes
    - /api (folder of JavaScript router files that enable user to create, delete, and update for each model in the table/database)
        - category_routes.js
        - product-routes.js
        - tag-routes.js
        - index.js
    - index.js
- /seeds (folder of JavaScript seed files to populate database with pre-existing data)
    - category-seeds.js
    - product-seeds.js
    - product-tag-seeds.js
    - tag-seeds.js
    - index.js
- /node_modules
- .env
- .gitignore (file that lists other files to be ignored by Github when pushing to repository, such as /node_modules folder)
- LICENSE (license used for this repository - MIT License)
- README (information file containing information about this specific project/application)
- package.json (file containing JSON npm dependencies and script commands)
- server.js (JavaScript file that sets up server)

## Tools and Technologies Used in This Project
- Javascript coding language
- Node JS (and node modules)
  - FS module (native/included in Node.js)
  - Express.js module (found on Expressjs.com)
  - Sequelize module ()
  - PG module ()
- VS Code platform used to code and build pages
- Github (website hosted and deployed on Github servers)

## How to Use
Once user opens files in VS Code platform, then they should start this back-end database program by opening their command line terminal and running "psql". This will connect the user to PostgreSQL, which has been enabled for this project. Once they have inputted their password, they need to then initialize the schema.sql file. The command for this is "\i db/schema.sql;". Utilizing Sequelize npm, the database/table will then be created with Postgres.

Note: ensuring that the database is connected and running can be confirmed by opening the DBeaver platform, which will show a Postgres table having been created. This is quicker than opening up pgAdmin program.

Next step is to seed that database table with some data that has been coded in JavaScript. Using Node in the terminal, the user should run the command "npm run seed", which will take all of the JavaScript seed files (found in /seeds foler) that have been coded and pull all of JSON object data and inject it into the database. From there, the user should continue on the start the local server, which will enable them to interact with the database in the back-end. The user can now go through the CRUD Process of creating, reading, updating, and deleting JSON object data from the database.

From this point on, the user would then open the Insomnia.Rest platform so that they can test and interact with their server routers/routes. In Insomnia, the user will create a project collection that contains three folders (Tags, Categories, and Products - as this relates to the database). A POST (create), multiple GET (read), a PUT (update), and a DELETE (delete) route(s) will be created in each of these folders, corresponding to their parent data (Tags, Categories, or Products). From here the user can test routes to see if they are working properly and can then create JSON object data, retrieve and read objects, update, or delete them as they see fit.

## Contributions
- Application refactored and deployed by Anthony Purificato
- Starter code found here (https://github.com/coding-boot-camp/bookish-sniffle)
## Credits
- Rutgers Coding Bootcamp provided resources and support for this project
- This code was refactored as part of an assignment in Rutgers Coding Bootcamp; Original starter code found here (https://github.com/coding-boot-camp/bookish-sniffle)
- OpenAI ChatGPT utilized for general coding assistance and aid upon encountering problems with JavaScript code

## License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me at undefined.