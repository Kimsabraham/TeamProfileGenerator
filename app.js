// All dependcies and necessary imports
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/renderTeam");
const Choices = require("inquirer/lib/objects/choices");


// array of questions
let teamList = [];

const managerQuestion = [
  {
    type: "input",
    name: "managername",
    message: "Please enter the manager's name.",
  },
  {
    type: "input",
    name: "managerid",
    message: "Please enter the manager's id number.",
  },
  {
    type: "input",
    name: "manageremail",
    message: "Please enter the manager's email.",
  },
  {
    type: "input",
    name: "officenumber",
    message: "Please enter the manager's office number.",
  },
];

const engineerQuestion = [
  {
    type: "input",
    name: "engineername",
    message: "Please enter the engineer's name.",
  },
  {
    type: "input",
    name: "engineerid",
    message: "Please enter the engineer's id number.",
  },
  {
    type: "input",
    name: "engineeremail",
    message: "Please enter the engineer's email.",
  },
  {
    type: "input",
    name: "githubname",
    message: "Please enter the engineer's GitHub username.",
  },
];

const internQuestion = [
  {
    type: "input",
    name: "internname",
    message: "Please enter the intern's name.",
  },
  {
    type: "input",
    name: "internid",
    message: "Please enter the intern's id number.",
  },
  {
    type: "input",
    name: "internemail",
    message: "Please enter the intern's email.",
  },
  {
    type: "input",
    name: "schoolname",
    message: "Please enter the school the intern attends.",
  },
];

const list = [
  {
    type: "list",
    name: "EmployeeType",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
    message: "Please select your new hire.",
  },
];

// function that prompts which questions will be asked depending on user selection
const promptSelection = () => {
  inquirer.prompt(list).then((answer) => {
    switch (answer.EmployeeType) {
      case "Manager":
        promptManager();
        break;
      case "Engineer":
        promptEngineer();
        break;
      case "Intern":
        promptIntern();
        break;
      default:
        createTeamHTML();
    }
  });
};

const promptManager = () => {
  inquirer.prompt(managerQuestion).then((answer) => {
    teamList.push(
      new Manager(
        answer.managername,
        answer.managerid,
        answer.manageremail,
        answer.officenumber
      )
    );
    promptSelection();
  });
};



const createTeamHTML = () => {
  fs.writeFile(outputPath, render(teamList), (err) => {
    if (err) throw err;
    console.log("File saved at " + outputPath);
  });
};

promptSelection();