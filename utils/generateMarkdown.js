// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `
      ![badge](https://img.shields.io/badge/license-${license}-blue)
        `;
      } else {
        return ' ';
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)  {
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(confirmContributers, data) {
    if (!confirmContributers) {
      return `
    Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
      `;
    } else {
      return `
    ${data}
      `;
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

  ## Table-of-Contents
  * [Deployed URL](#gitUserName)
  
  ## License 
    ${renderLicenseLink(data.license)}\n
    ${renderLicenseBadge(data.license)}\n

  ## User
  ${data.gitUserName}
    
  ## [Description]
   
  ## [Deployed URL]
    ${data.Deployed_URL}

  ## [GitRepo]
    ${data.gitRepo}

  ## [User Story](#table-of-contents)
    ${data.User_Story}


  ## [prerequisite]
    ${data.prerequisite}

  ## [Dependency]
    ${data.dependency}

  ## [Application invoked by]
    ${data.application_invoked}

  ## [Test Case]
   ${data.testCase}

   ## [Collaborators are]
   ${renderLicenseSection(data.contribution)}
 
`;
  }

module.exports = generateMarkdown;