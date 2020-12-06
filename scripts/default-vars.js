const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(__dirname, '..', 'src', 'style');
const defaultLess = fs.readFileSync(
  path.join(stylePath, 'themes', 'default.less'),
  'utf8',
);

const defaultThemesLess = lessToJs(defaultLess, {
  stripPrefix: true,
  resolveVariables: false,
});

module.exports = defaultThemesLess;
