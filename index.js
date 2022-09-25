// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter your title!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices: ['agpl', 'apache', 'mit', 'no license']
},
{
    type: 'input',
    name: 'gitUserName',
    message: 'What is the git userName? (Required)',
    validate: deployedURLInput => {
        if (deployedURLInput) {
            return true;
        } else {
            console.log('Please enter Deployed URL!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'Deployed_URL',
    message: 'What is the Deployed URL? (Required)',
    validate: deployedURLInput => {
        if (deployedURLInput) {
            return true;
        } else {
            console.log('Please enter Deployed URL!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'gitRepo',
    message: 'What is the gitRepo link? (Required)',
    validate: gitRepoInput => {
        if (gitRepoInput) {
            return true;
        } else {
            console.log('Please enter gitRepo link');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'User_Story',
    message: 'What is the User Story?',
    validate: UserStory_Input => {
        if (UserStory_Input) {
            return true;
        } else {
            console.log('Please enter gitRepo');
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'prerequisite',
    message: 'prerequisite: System need node.js?',
    choices: ['Yes', 'No'],
    validate: Dependency_Input => {
        if (Dependency_Input) {
            return true;
        } else {
            console.log('Please enter Dependency');
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'dependency',
    message: 'What are the Dependency? (Required)',
    choices: ['npm install inquirer', 'nmp init', 'ASP.Net', 'PHP'],
    validate: Dependency_Input => {
        if (Dependency_Input) {
            return true;
        } else {
            console.log('Please enter Dependency');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'application_invoked',
    message: 'What will invoked application ? (Required)',
    validate: application_invoked => {
        if (application_invoked) {
            return true;
        } else {
            console.log('Please enter Dependency');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'testCase',
    message: 'What are the Test case',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Who are the collaborators ',

},


];

// TODO: Create a function to write README file
var writeFile = file_output=> {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/README.md', file_output, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init().then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})