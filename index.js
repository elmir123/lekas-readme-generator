// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'comments',
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
        message: 'Do you have any usage Instractions',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing',
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
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    }, 
    {
        type: 'editor',
        name: 'bio',
        message: 'Please write a short bio of at least 3 lines.',
        validate: function (text) {
          if (text.split('\n').length < 3) {
            return 'Must be at least 3 lines.';
          }
    
          return true;
        },
    }
];
inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log(JSON.stringify(answers, null, '  '));
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
