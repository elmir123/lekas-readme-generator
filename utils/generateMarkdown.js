// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  return ""
  }

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `(https://opensource.org/licenses/${license.replace(/\s+/g,'-').toLowerCase()})`
  }
  return ""
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license)+renderLicenseLink(license)
}

// Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.project_name}

${renderLicenseSection(answers.licenses)}
  
## Description
${answers.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
  
## Installation
\`\`\`md
${answers.installation}
\`\`\`
  
## Usage
\`\`\`md
${answers.usage}
\`\`\`
  
## Contributing
\`\`\`md
${answers.contributing}
\`\`\`
  
## Test
\`\`\`md
${answers.test}
\`\`\`

## License
${renderLicenseSection(answers.licenses)}
  
## Questions
Please contact me through GitHub:
GitHub Profile https://github.com/${answers.githubname}
  
Or using my email addres:
Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
