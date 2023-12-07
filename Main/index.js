const inquirer = require('inquirer');
const fs = require('fs');
var badge
const generateREADME = ({ title, description, install, usage, contributing, tests, license, username, email}) =>
  `# ${title}
  ${badge}
  ## Description
  ${description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation
  ${install}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## Questions
  - https://github.com/${username}
  - ${email}
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: ['Apache License 2.0','MIT License','GNU GPLv3',],
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ])
  .then((answers) => {
    if (answers.license = 'MIT License') {
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (answers.license = 'Apache License 2.0') {
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else {
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
