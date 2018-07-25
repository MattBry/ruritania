const fs = require('fs');
const nunjucks = require('nunjucks');
const data = require('./data/world/world.json');
function renderWiki() {
  const world = nunjucks.render('./templates/world.html', data);
  fs.writeFileSync('./wiki/index.html', world);
}

module.exports = {
  renderWiki
};