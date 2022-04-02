const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// declare an empty array to hold employees when added through prompt
const teamArray= []

// manager’s name, employee ID, email address, and office number
const managerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager? (Required)",
      validate: (mangerNameInput) => {
        if (mangerNameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's employee ID number? (Required)",
      validate: (managerIdInput) => {
        if (managerIdInput && !isNaN(managerIdInput)) {
          return true;
        } else {
          console.log("Please enter a number for the manager's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email? (Required)",
      validate: (managerEmailInput) => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number? (Required)",
      validate: (managerOfficeInput) => {
        if (!isNaN(managerOfficeInput)) {
          return true;
        } else {
          console.log("Please enter a number for the manager's office number!");
          return false;
        }
      },
    },
  ])
  .then((managerData) => {
     const {name, id, email, officeNumber} = managerData;
     const manager = new Manager(name, id, email, officeNumber)
      teamArray.push(manager)
  })
};

//engineer’s name, ID, email, and GitHub username
// intern’s name, ID, email, and school
const employeeQuestions = () => {
  console.log(`
  =================
  Add a New Employee
  =================
  `);

  return inquirer.prompt([
    {
      type: "list",
      name: "employeeRole",
      message:
        "Please select the type of employee you would like to add to your team?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee? (Required)",
      validate: (employeeNameInput) => {
        if (employeeNameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employee's ID number? (Required)",
      validate: (employeeIdInput) => {
        if (employeeIdInput && !isNaN(employeeIdInput)) {
          return true;
        } else {
          console.log("Please enter a number for the employee's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email? (Required)",
      validate: (employeeEmailInput) => {
        if (employeeEmailInput) {
          return true;
        } else {
          console.log("Please enter the employee's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the employee's github username? (Required)",
      validate: (employeeGithubInput) => {
        if (employeeGithubInput) {
          return true;
        } else {
          console.log("Please enter the employee's github usernmae!");
          return false;
        }
      },
      when: ({ employeeRole }) => {
        if (employeeRole === "Engineer") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What school did this employee attend?",
      validate: (employeeSchoolInput) => {
        if (employeeSchoolInput) {
          return true;
        } else {
          console.log("Please enter the employee's school!");
          return false;
        }
      },
      when: ({ employeeRole }) => {
        if (employeeRole === "Intern") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add another employee?",
      default: false,
    },
  ]).then((employeeData) => {
      //if the role is engineer then make new Engineer class and push it to the team array
      if(employeeData.employeeRole === "Engineer") {
          const{name, id, email, github} = employeeData;
          const engineer = new Engineer(name, id, email, github);
          teamArray.push(engineer);
      }
      //if the role is intern then make new Intern class and push it to the team array
      if(employeeData.employeeRole === "Intern") {
          const{name, id, email, school} = employeeData;
          const intern = new Intern(name, id, email, school);
          teamArray.push(intern)
      }
      // if the last confirm question is true, add another employee, if not then end the prompts and retrun the final team array
      if(employeeData.confirmAddEmployee) {
          return employeeQuestions()
      } else {
          return teamArray;
      }

      
  });
};

// start the prompt for the team starting with the manager questions
//then go to adding the employees
//then console log the final resutls
managerQuestions()
    .then(employeeQuestions)
    .then(teamResults => {
        console.log(teamResults)
        return teamArray;
    })