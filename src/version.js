'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--version`,
  description: `Shows the program's version`,
  execute() {
    console.log(`v${packageInfo.version}`);
  }
};
