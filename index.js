const inquirer = require("inquirer");
const fs = require("fs");

// Employee detail classes
const teamDetails = [];

const generateHTML = ({})

function init() {
    // Enter Team Manager Details
    function enterManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the team manager's name?",
                },
                {
                    type: "input",
                    name: "managerID",
                    message: "What is the team manager's employee ID?",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the team manager's email address?",
                },
                {
                    type: "input",
                    name: "managerOffice",
                    message: "What is the team manager's office number?",
                },
            ])
            .then((answers) => {
                const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerEmail, answers.managerOffice);
                teamDetails.push(manager);
                selectTeamMembers();
            });

        // Add Engineer or Intern to Team Members
        function selectTeamMembers() {
            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "selectMember",
                        message: "Would you like to add an Engineer or Intern to your team?",
                        choices: [
                            "Engineer",
                            "Intern",
                        ]
                    }
                ])
                .then((memberSelected => {
                    switch (memberSelected.selectMember) {
                        case "Engineer":
                            addEngineer();
                            break;
                        case "Intern":
                            addIntern();
                            break;
                        default:
                            generateHTML();
                    }
                }))
        }

        function addEngineer() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "engineerName",
                        message: "What is the engineer's name?",
                    },
                    {
                        type: "input",
                        name: "engineerID",
                        message: "What is the engineer's employee ID?",
                    },
                    {
                        type: "input",
                        name: "engineerEmail",
                        message: "What is the engineer's email address?",
                    },
                    {
                        type: "input",
                        name: "engineerGitHub",
                        message: "What is the engineer's GitHub username?",
                    },
                ])
                .then((answers) => {
                    const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
                    teamDetails.push(engineer);
                    addTeam();
                });
        }

        function addIntern() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What is the intern's name?",
                    },
                    {
                        type: "input",
                        name: "internID",
                        message: "What is the intern's employee ID?",
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is the intern's email address?",
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What is the intern's school?",
                    },
                ])
                .then((answers) => {
                    const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
                    teamDetails.push(intern);
                    addTeam();
                });
        }

    };
}

init();

