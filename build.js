"use strict";
const fs = require('fs');
const nunjucks = require('nunjucks');

function setUpWiki() {
  fs.mkdirSync('./wiki');
  fs.mkdirSync('./wiki/countries');
}

function renderWiki() {
  let data;
  const dataDir = `${process.cwd()}/data`;
  try {
    data = require(`${dataDir}/world/world.json`);
    console.log(`found world ${data.name}`);
  } catch (error) {
    console.log('no world data found! aborting render.');
    return;
  }
  if (!fs.existsSync('./wiki')) {
    console.log('creating wiki directories...');
    try {
      setUpWiki();
      console.log('wiki directories created!');
    } catch (error) {
      console.log('error creating wiki directories! aborting render.');
      return;
    }
  }
  nunjucks.configure(`${__dirname}/templates`);
  console.log('rendering world index...');
  try {
    const world = nunjucks.render('world.html', data);
    fs.writeFileSync('./wiki/index.html', world);
    console.log('created world index!');
  } catch (error) {
    console.log('error creating world index! aborting render.')
    return;
  }
  data.countries.forEach(country => {
    try {
      let countryData = require(`${dataDir}/countries/${country}.json`);
      let countryPage = nunjucks.render('country.html', countryData);
      fs.writeFileSync(`./wiki/countries/${country}.html`, countryPage);
      console.log(`created country page for ${country}`);
    } catch (error) {
      console.log(`Unable to render ${country}, adding stub page`);
      let stubPage = nunjucks.render('stub.html', { type: 'country', name: country })
      fs.writeFileSync(`./wiki/countries/${country}.html`, stubPage);
    }
  })
}

module.exports = {
  renderWiki
};