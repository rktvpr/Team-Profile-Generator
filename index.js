//Node packages
const fs = require('fs');
const inquirer = require('inquirer');
//HTMl creation
const {generateHTML} = require('./src/teamGenerator')
//Software teams profiles
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
//array to hold inputs
const SoftwareTeamArray = [];
//function to select prompts for manager
const addManager = () => {
    const inquirerProcess = inquirer.createPromptModule()
    inquirerProcess([{
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
        shouldAdd();
    })
}
//Function to add new employees
const shouldAdd = () => {
    const inquirerProcess = inquirer.createPromptModule()
    inquirerProcess([
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to add another employee?' 
    }])
    .then(data => {
        if(data.confirm){
            addEmployee()
        }
        else{
           const html = generateHTML(SoftwareTeamArray)
           fs.writeFile('dist/test.html', html, function(err){
            if(err) console.log(err)
           })
        }
    })
}
//function with prompts to select employees
const addEmployee = () => {
    const inquirerProcess = inquirer.createPromptModule()
    inquirerProcess([
        {
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
        type: 'input',
        name: 'github',
        message: "What is this employee's github username?",
        when: (input) => input.role === "Engineer"
    },

    {
        type: 'input',
        name: 'school',
        message: "What school does this intern attend?",
        when: (input) => input.role === "Intern"
    }
])
.then(employeeData => {
    let {name, id, email, role, github, school} = employeeData;
    let employee;
    if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
    }
    else {
        employee = new Intern(name, id, email, school);
    }
    SoftwareTeamArray.push(employee);
    shouldAdd();

})
}
addManager();


