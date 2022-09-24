// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const file_system = require('fs');

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
    type: 'input',
    name: 'Deployed_URL',
    message: 'What is the Deployed URL (Required)',
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
    message: 'What is the gitRepo (Required)',
    validate: gitRepoInput => {
        if (gitRepoInput) {
            return true;
        } else {
            console.log('Please enter gitRepo');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'User_Story',
    message: 'What is the User Story',
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
    type: 'input',
    name: 'Acceptance_Criteria',
    message: 'What is the Acceptance Criteria',
    validate: AcceptanceCriteria_Input => {
        if (AcceptanceCriteria_Input) {
            return true;
        } else {
            console.log('Please enter Acceptance Criteria');
            return false;
        }
    }
},
{
    type: 'Checkbox',
    name: 'dependency',
    message: 'What are the Dependency (Required)',
    choices: ['node.js', 'nmp', 'ASP.Net', 'PHP'],
    validate: Dependency_Input => {
        if (Dependency_Input) {
            return true;
        } else {
            console.log('Please enter Dependency');
            return false;
        }
    }
},


];

// TODO: Create a function to write README file
var writeToFile = file_output=> {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output//generated-README.md', fileContent, err => {
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