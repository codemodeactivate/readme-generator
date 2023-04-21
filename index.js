// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: '\x1b[44m\x1b[1mWhat is the title of your project?\x1b[0m\n',
    },
    {
        type: 'input',
        name: 'description',
        message: '\x1b[44m\x1b[1mProvide a brief description of your project:\x1b[0m\n',
    },
    {
        type: 'input',
        name: 'installation',
        message: '\x1b[44m\x1b[1mHow do you install the application?\x1b[0m\n',
    },
    {
        type: 'input',
        name: 'usage',
        message: '\x1b[44m\x1b[1mProvide usage instructions:\x1b[0m\n',
    },
    {
        type: 'input',
        name: 'contribute',
        message: '\x1b[44m\x1b[1mHow can others contribute?\x1b[0m\n',
    },
    {
        type: 'input',
        name: 'tests',
        message: '\x1b[44m\x1b[1mPlease provide test instructions:\x1b[0m\n',
      },
      {
        type: 'list',
        name: 'license',
        message: '\x1b[44m\x1b[1mPlease choose a license for your project:\x1b[0m\n',
        choices: ['Academic Free license v3.0','Apache license 2.0', 'Artistic License 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Create Commons license family', 'Create Commons Zero v1.0 Universal', 'Create Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0','GNU General Public License v3.0','GNU Lesser General Public License family','GNU Lesser General Public License v2.1','GNU Lesser General Public License v3.0','ISC','LaTeX Project Public License v1.3c','Microsoft Public License','MIT','Mozilla Public License 2.0','Open Software License 3.0','PostgreSQL License','SIL Open Font License 1.1','University of Illinois/NCSA Open Source License','The Unlicense','zLib License'],
      },
      {
        type: 'input',
        name: 'username',
        message: '\x1b[44m\x1b[1mWhat is your GitHub username?\x1b[0m\n',
      },
      {
        type: 'input',
        name: 'email',
        message: '\x1b[44m\x1b[1mWhat is your email address?\x1b[0m\n',
      },
      {
        type: 'input',
        name: 'development',
        message: '\x1b[44m\x1b[1mWhat future plans for development do you have?\x1b[0m\n',
      },
      {
        type: 'input',
        name: 'credits',
        message: '\x1b[44m\x1b[1mPlease list any collaborators, third-party assets, or tutorials used:\x1b[0m\n',
      },

];

// TODO: Create a function to write README file
function writeToFile(readmeInputs, readmeData) {

    fs.writeFile('./generate/README.md', readmeData, (err) => {
        if (err) throw err;
        console.log('check the output')
    });
}

// TODO: Create a function to initialize app
function init() {
    let readmeInputs;
    inquirer
        .prompt(questions)
        .then (answers => {
            readmeInputs = {...answers};
            return generateMarkdown(readmeInputs);
        })
        .then (readmeData => {
            return writeToFile(readmeInputs, readmeData);
        })
        .catch(err => {
            console.log(err);
})
}
// Function call to initialize app
init();
