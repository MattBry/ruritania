const fs = require('fs');
const inquirer = require('inquirer');
const worldQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your world?'
  },
  {
    type: 'input',
    name: 'countries',
    message: 'What countries are in your world?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe your world'
  }
]
function buildWorld() {
  inquirer.prompt(worldQuestions).then(answers => {
    let world = {};
    world.name = answers.name;
    world.countries = answers.countries.split(',');
    world.description = answers.description;
    fs.writeFileSync('./data/world/world.json', JSON.stringify(world));
  });
}

module.exports = {
  buildWorld
};