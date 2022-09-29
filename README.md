# Node.js Challenge: Professional README Generator
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

## [Deployed URL]
```
    https://kabirfaisal1.github.io/ReadMeGenerater/
```
## GitRepo
```   
    https://github.com/kabirfaisal1/ReadMeGenerater.git
```
## Walk-through Video
https://vimeo.com/753642221

## IMPORTANT Application invoked 
```
    node index.js
```

## User Story
```
    AS A developer I WANT a README generator
    SO THAT I can quickly create a professional README for a new project
```
## Acceptance Criteria
```
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    WHEN I enter my project title
    THEN this is displayed as the title of the README
    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, User Story, Contributing, and Tests
    WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README
```
## Test Case
1. With License
2. Without License
3. Don't answer one of the Required questions
4. Do not select any checkbox.

## Screen Shots  
![Image at questions.](./images/questionScreenShots.png)
![Image at Terminal return.](./images/terminalreturn.png.png)
![Image at Test case 1.](./images/questionScreenShots.png)
![Image at Test case 2.](./images/questionScreenShots.png)
![Image at Test case 3.](./images/TestCase3.png)
![Image at Test case 4.](./images/TestCase4.png)

## Test Case output 
 ![Image at output](./images/outputTest.png.png)
## Node and NPM Doc
https://nodejs.org/en/download/package-manager/
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
