const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


// array of questions
let teamList = [];

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

const list = [
  {
    type: "list",
    name: "EmployeeType",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
    message: "Please select the rol of your new hire.",
  },
];
