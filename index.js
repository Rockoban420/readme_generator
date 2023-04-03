// TODO: Include packages needed for this application

// process.argv

const inquirer = require ('inquirer');
const fs = require ('fs');

// TODO: Create an array of questions for user input

inquirer.prompt ([
    {
        name: 'projectTitle',
        message: 'Enter your project title',
        type: 'input'
    }, 
    {
        name: 'description',
        message: 'Enter the description of your project',
        type: 'input'
    }, 
    {
        name: 'installation',
        message: 'Enter installation instructions',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Enter the usage information',
        type: 'input'
    },
    {
        name: 'contribution',
        message: 'Enter the contribution guidelines',
        type: 'input'
    },
    {
        name: 'test',
        message: 'Enter test instructions',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Which license would you like to use?',
        type: 'list',
        choices: ['Bulbasaour', 'Squirtle', 'Charmander']
    },
    {
        name: 'username',
        message: 'Enter your github username',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Enter your email address',
        type: 'input'
    },
   
   

]).then (answers => {
    console.log(answers);


    fs.writeFile ('README.md', fileGenerator(answers), (err)=>{
        if (err){
            return console.log(err);
        }
        console.log ('Success!');
    })
});

// TODO: Create a function to write README file
const fileGenerator = ({projectTitle, description, installation, usage, contribution, test, license, username, email, ...retstOfCrap}) => {
    console.log (retstOfCrap);
    return `# ${projectTitle}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributions
${contribution}

## Tests
${test}

## License
${license}

## Questions
If you would like to contact me please email me at ${email}
And my github profile is ![here](https://github.com/${username})

## Table of Contents (Optional)

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [License](#License)
- [Questions](#Questions)`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
