
const licenseData = [
  {
    name: "Torii",
    description: "Torii's SaaS management platform allows companies to regain control over their IT business, reduce unnecessary spend, run IT more efficiently, and ensure security and compliance.",
    link: 'https://get.toriihq.com/demo-page-capterra/?channel=capterra',
    icon: "./assets/Torii.png"
  },
  {
    name: "InvGate Assets",
    description: "InvGate Assets provides you with greater insight into how IT investments are being employed and if they could be better utilized. Find underutilized IT assets or harvest licenses for reuse elsewhere.",
    link: 'https://invgate.com/assets/?utm_campaign=CapterraUS&utm_source=Capterra+US&utm_medium=CPC&utm_content=Visit+website+link&utm_source=capterras' ,
    icon: "./assets/Invgate.png"  
  },
  {
    name: "VIZOR License Manager",
    description: "Simplify software asset management with a central license repository for all of your software license entitlements, from cloud subscriptions to enterprise agreements. VIZOR stores all details related to your software assets and licenses including supplier information and documentation, so you can easily manage multiple purchases, agreements and maintenance contracts. VIZOR also ensures you remain compliant with clear and accurate reports detailing your effective license position. Receive timely reminders when maintenance contracts and cloud subscriptions are due for renewal, and stay informed on current and forecast software expenditure with powerful analytics reporting.",
    link: "https://www.vizor.cloud/information/software-license-management/?utm_source=capterra&utm_medium=ppc&utm_campaign=sw-pro",
    icon: "./assets/ME.png" 
  },
  {
    name: "ManageEngine Desktop Central",
    description: "Desktop Central is a unified endpoint management (UEM) solution that helps in managing servers, laptops, desktops, smartphones, and tablets from a central location. It's a modern take on desktop management that can be scaled as per organizational needs.",
    link: 'https://www.manageengine.com/products/desktop-central/?utm_medium=ppc&utm_campaign=DC-License-Management&utm_source=capterra',
    icon: "./assets/duke.png"
  },
  {
    name: "10 Duke Entitlements",
    description: "10Duke allows you to sell your software product in new ways, by enabling you to offer multiple license types simultaneously, delivered dynamically from the cloud.",
    link: 'https://www.10duke.com/software-license-management-lp-c/?Capterra=capterra',
    icon: "./assets/Vizore.png"
  }
];




function checkLicense(questionAnswers){
  for (i = 0; i < licenseData.length; i++) {
    let license = licenseData[i];
    if (questionAnswers.license !== 'Other'){
      console.log(license);
      renderLicenseBadge(license);
      renderLicenseLink(license);
      renderLicenseSection(license);
    }
  }
};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return icon = license.icon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
return link = license.link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return licenseInfo = license.description
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionAnswers) {
  checkLicense(questionAnswers);
  return `  #  ${questionAnswers.projectname}![license logo](${icon})
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)



     ## Installation instructions

     ${questionAnswers.installation}
    
     ## Description

     ${questionAnswers.description}
    
     ## Languages

     ${questionAnswers.languages}
    
     ## Usage

     ${questionAnswers.usage}
    
     ## About

     ${questionAnswers.about}
    
     ## License

     ${questionAnswers.licenses}
    
    
     

  }

`;
}

module.exports = generateMarkdown;

