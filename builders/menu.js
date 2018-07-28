"use strict";
const fs = require('fs');
const inquirer = require('inquirer');
const buildCountry = require('./country').buildCountry;
const menuOptions = [
  {
    type: 'list',
    name: 'choice',
    message: 'What do you want to create?',
    choices: [
      'Country'
    ]
  }
]
function beginAdd() {
  if (!fs.existsSync('./data')) {
    console.log('No data folder found! Run "ruritania create" first!');
    return;
  }
  const dataDir = `${process.cwd()}/data`;
  const world = require(`${dataDir}/world/world`);
  inquirer.prompt(menuOptions).then(answers => {
    if (answers.choice === 'Country') {
      buildCountry().then(country => {
        if (!world.countries.includes(country.name)) {
          world.countries.push(country.name);
        }
        fs.writeFileSync('./data/world/world.json', JSON.stringify(world));
      });
    }
  });
}

module.exports = {
  beginAdd
};