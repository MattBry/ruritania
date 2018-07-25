const fs = require('fs');
const inquirer = require('inquirer');
const countryQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the country?'
  },
  {
    type: 'input',
    name: 'government',
    message: 'What kind of government does it have?'
  },
  {
    type: 'list',
    name: 'economy',
    message: 'How wealthy is it?',
    choices: [
      'Impoverished',
      'Average',
      'Prosperous'
    ]
  }
]
function buildCountry() {
  inquirer.prompt(countryQuestions).then(answers => {
    let world = {};
    world.name = answers.name;
    world.countries = answers.countries.split(', ');
    world.description = answers.description;
    fs.writeFileSync('./data/world/world.json', JSON.stringify(world));
  });
}

module.exports = {
  buildCountry
};