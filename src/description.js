'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--license`,
  description: `Shows the program's description`,
  execute() {
    console.log(`v${packageInfo.description}`);
  }
};
