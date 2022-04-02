// // Create the license badge
// const renderLicenseBadge = license => {
//   if (!license) {
//     return '';
//   }

//   return `
//     ${license}
//   `;
// };



// // Create the license link
// const renderLicenseLink = license => {
//   if (!license) {
//     return '';
//   }

//   return `
//     ${license}
//   `;
// };



// // Create the license section (license description)
// const renderLicenseSection = license => {
//   if (!license) {
//     return '';
//   }

//   return `
//     ${license}
//   `;
// };




// Create the markdown for the README
function generateMarkdown(data) {
    return `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    ${data.license}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    - GitHub username: ${data.username}
    - GitHub project repository link: ${data.link}
    - Email: ${data.email}
    - For additional questions: ${data.reachOut}
  `;
  };
  
  
  module.exports = generateMarkdown;
  