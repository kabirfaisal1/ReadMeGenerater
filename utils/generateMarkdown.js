// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license == "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "No License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

  ## Table-of-Contents
  * [UserName](#gitUserName)
  * [Descriptions](#description)
  * [Deployed_URL](#deployed_url)
  * [GitRepositories]](#gitRepositories)
  * [UserStory](#userstory)
  * [Prerequisites](#prerequisite)
  * [Dependency](#dependency)
  * [Application_Invoked](#applicationinvoked)

  ## License 
  ${ renderLicenseBadge(data.license)}
   

  ## [UserName](#table-of-contents)
  ${data.gitUserName}
    
  ## [Descriptions](#table-of-contents)
  ${data.description}
   
  ## [Deployed_URL](#table-of-contents)
    ${data.deployed_url}

  ## [GitRepositories](#table-of-contents)
    ${data.gitRepo}

  ## [UserStory](#table-of-contents)
    ${data.user_story}


  ## [Prerequisites](#table-of-contents)
  Your system will need to have
    ${data.prerequisite}

  ## [Dependency](#table-of-contents)
  Your project file need to have
    ${data.dependency}

  ## [Application_Invoked](#table-of-contents)
  The application will be invoked by using the following command:
    ${data.application_invoked}

  ## Test Case
   ${data.testCase}

   ## Collaborators are
   ${data.contribution}
 
`;
  }

module.exports = generateMarkdown;