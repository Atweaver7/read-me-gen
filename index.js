// TODO: Include packages needed for this application
const { info } = require("console");
const FileSystem = require("fs");
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "projectname",
        message: "Project Title: (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Installation Instructions",
        validate: (installation) => {
          if (installation) {
            return true;
          } else {
            console.log("Installation Instructions:");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Brief description of the project:",
        validate: (description) => {
          if (description) {
            return true;
          } else {
            console.log("Brief description of the project:");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "usage",
        message: "Usage information: (Required)",
        validate: (usage) => {
          if (usage) {
            return true;
          } else {
            console.log("Usage");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "languages",
        message: "Please select your language:",
        choices: ["C++", "HTML", "CSS", "JavaScript", "Other"],
      },
      {
        type: "input",
        name: "about",
        message: "Provide some information about yourself:",
        validate: (usage) => {
          if (usage) {
            return true;
          } else {
            console.log("Usage");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "licenses",
        message: "Please select your license:",
        choices: [
          "Torii",
          "10 Duke Entitlements",
          "InvGate Assets",
          "VIZOR License Manager",
          "ManageEngine Desktop Central",
          "Other",
          "None",
        ],
      },
    ])
    .then((questionAnswers) => {
      console.log(questionAnswers);
      return questionAnswers;
    });
};

const secondPrompt = (questionAnswers) => {
  if (questionAnswers.licenses === "Other") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "licenses",
          message: "Please enter License name:",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter License name:");
              return false;
            }
          },
        },
      ])
      .then((licenseData) => {
        questionAnswers.licenses = licenseData.licenses;
        return questionAnswers;
      });
  } else {
    return questionAnswers;
  }
};

// TODO: Create a function to write README file
function writeToFile(markdown) {
  FileSystem.writeFile("./README.md", markdown, (err) => {
    if (err) throw new error(err);

    console.log("Page created! Check out README.md");
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(secondPrompt)
    .then((questionAnswers) => {
      const markdown = generateMarkdown(questionAnswers);
      writeToFile(markdown);
    });
}

// Function call to check license

// Function call to initialize app
init();
