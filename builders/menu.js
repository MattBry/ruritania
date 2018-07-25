const inquirer = require('inquirer');
const menuOptions = [
  {
    type: 'list',
    name: 'choice',
    message: 'What do you want to create?',
    choices: [
      'Country',
      'Province',
      'Region',
      'Area',
      'City',
      'District',
      'Landmark',
      'Organization',
      'Person'
    ]
  }
]
function beginAdd() {
  inquirer.prompt(menuOptions).then(answers => {
    console.log(answers);
  });
}

module.exports = {
  beginAdd
};