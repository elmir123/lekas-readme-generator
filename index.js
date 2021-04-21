// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateM = require('./utils/generateMarkdown')

// Create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: 'Name Of Your Project',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Project Description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instractions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Usage Instractions',
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'How to Contribute',
        validate: function (text) {
            if (text.split('\n').length < 1) {
                return 'Must be at least 1 lines.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions',
    },
    {
        type: 'input',
        name: 'githubname',
        message: 'Your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your Email Address',
    },
    {
        type: 'list',
        message: 'Choose the license for your project.',
        name: 'licenses',
        choices: ['ISC', 'MIT', 'Apache 2.0', 'Boost 1.0','GPL 3.0'],
    }, 
];

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => 
    writeFileAsync('README.md', generateM(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();


