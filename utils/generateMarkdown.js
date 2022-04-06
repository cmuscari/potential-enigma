// Create the license badge
const renderLicenseBadge = license => {
  
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }

  if (license === "Apache-2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }

  if (license === "MPL-2.0") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } 

  if (license === "none") {
    return "";
  }
};



// Create the license link
const renderLicenseLink = license => {
  if (license === "none") {
    return "";
  }
  else {
    return "- [License](#license)";
  }
};



// Create the license section (license description)
const renderLicenseSection = license => {
  if (license === "none") {
    return "";
  }
  else {
    return`## License
    
  This project uses ${license} license.`
  }
};




// Create the markdown for the README
function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

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
  