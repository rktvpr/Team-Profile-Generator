//Node packages
const fs = require('fs');
const inquirer = require('inquirer');
//HTMl creation
const generateHTML = require('')
//Software teams profiles
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
//array to hold inputs
const SoftwareTeamArray = [];
const addManager = () => {
    return inquirer.createPromptModule([{
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the Managers ID number?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers Email?'
    },

    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the Managers office Number?'
    },
    ])
    .then(managersInput => {
        const {name, id, email, officeNum} = managersInput;
        const manager = new Manager(name, id, email, officeNum);
        SoftwareTeamArray.push(manager);
        console.log(manager)
    })
}

const addEmployee = () => {
    return inquirer.createPromptModule([{
        type: 'list',
        name: 'role',
        message: 'What is this employees position?',
        choices: ['Engineer', 'Intern'],
    },

    {
        type: 'input',
        name: 'name',
        message: "What is this Employees name?",
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is this employees ID?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is this employees email?',
    },

    {
    
    }
])
}


