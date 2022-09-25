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
    choices: ['GNU AGPLv3', 'Apache', 'MIT','GNU GPLv3','GNU LGPLv3','Mozilla','No License']
},
{
    type: 'input',
    name: 'description',
    message: 'What is the description? (Required)',
    validate: description => {
        if (description) {
            return true;
        } else {
            console.log('Please enter Deployed URL!');
            return false;
        }
    }
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
    name: 'deployed_url',
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
    name: 'user_story',
    message: 'What is the User Story?',
    validate: user_story => {
        if (user_story) {
            return true;
        } else {
            console.log('Please enter gitRepo');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'prerequisite',
    message: 'prerequisite: System need node.js?',
    choices: ['Yes', 'No'],
    validate: prerequisite_input => {
        if (prerequisite_input) {
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
    message: 'What are the Dependency?',
    choices: ['npm install inquirer', 'nmp init', 'ASP.Net', 'PHP'],
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