const inquirer = require('inquirer');
const pg = require('pg')

// Function to generate SVG Data Based on User Input and Gives a Choice of Different Shapes Data That Will Be Outputted in the Newly Created SVG File.
function generateSVG(data) {
    let menuOption;
    switch (data.options) {
        case 'View All Employees':
            menuOption = new option.Circle(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'Add Employee':
            shapeSVG = new shapes.Triangle(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'Update Employee Role':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'View All Roles':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'Add Role':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'View All Departments':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'Add Department':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        case 'Quit':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            // break;
        default:
            shapeSVG = 'View All Departments';
            // break;
    }
    return shapeSVG;
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
        // prefix: '\n'
    },
];

inquirer.prompt(questions)
    .then(answers => {
        console.log('Answers:', answers);
        const shapeSVG = generateSVG(answers);

        const svgCode = `
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        </svg>`;

        // Writes SVG Code to a Newly Created File
        fs.writeFileSync('./examples/logo.svg', svgCode);

        console.log('Generated logo.svg file successfully!');
    })
    .catch((err) => {
        console.error('Error:', err);
    })