"use strict";
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
  let country = inquirer.prompt(countryQuestions).then(answers => {
    let country = {};
    country.name = answers.name;
    country.government = answers.government;
    country.economy = answers.economy;
    fs.writeFileSync(`./data/countries/${country.name}.json`, JSON.stringify(country));
    return country
  });
  return country;
}

module.exports = {
  buildCountry
};