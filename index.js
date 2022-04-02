const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Enter your project's installation instructions:"
        },
        {
            type: 'input',
            name: 'usage',
            message: "Enter your project's usage information:"
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use for your project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unilicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter the test instructions:'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username (Required):',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: "Enter the link to your project's repository on GitHub (Required):",
            validate: linkInput => {
                if (linkInput) {
                    return true;
                }
                else {
                    console.log("Please enter the link to your project's repository on GitHub!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:'
        },
        {
            type: 'input',
            name: 'reachOut',
            message: 'Enter instructions on how to reach you if a user has additional questions:'
        }
    ]);
};






// Function to write README file
const writeFile = markdownContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', markdownContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README file created!'
            });
        });
    });
};





// Function to initialize app
function init() {
    questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(markdown => {
        return writeFile(markdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
 };



 // Call the initialize function
 init();




