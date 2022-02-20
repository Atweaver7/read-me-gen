// TODO: Include packages needed for this application
const FileSystem = require('fs');
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project Title: (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your project name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Description of project: (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your project description');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Installation Instructions (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'languages',
        message: 'Please select your license:',
        choices: ['Placeholder', 'Placeholder', 'Placeholder', 'Placeholder', 'Placeholder']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Usage information: (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
    //   {
    //     type: 'input',
    //     name: 'github',
    //     message: 'Description of project: (Required)',
    //     validate: githubInput => {
    //       if (githubInput) {
    //         return true;
    //       } else {
    //         console.log('Please enter your GitHub username!');
    //         return false;
    //       }
    //     }
    //   },
    //   {
    //     type: 'confirm',
    //     name: 'confirmAbout',
    //     message: 'Would you like to enter some information about yourself for an "About" section?',
    //     default: true
    //   },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();
