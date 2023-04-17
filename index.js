// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['Academic Free license v3.0','Apache license 2.0', 'Artistic License 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Create Commons license family', 'Create Commons Zero v1.0 Universal', 'Create Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c','Microsoft Public License','MIT','Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License','SIL Open Font License 1.1','University of Illinois/NCSA Open Source License','The Unlicense','zLib License'],
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('check the output')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();


/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/
