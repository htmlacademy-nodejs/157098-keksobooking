'use strict';

const packageInfo = require(`../package.json`);
const colors = require(`colors/safe`);

const version = packageInfo.version;

const [majorV, minorV, patchV] = [...version.split(`.`)];

module.exports = {
  input: `--version`,
  description: `Показывает текущую версию`,
  execute() {
    console.log(`v${colors.red(majorV)}.${colors.green(minorV)}.${colors.blue(patchV)}`);
  }
};
