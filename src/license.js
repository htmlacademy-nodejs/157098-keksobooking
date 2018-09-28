'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--license`,
  description: `Shows the program's license`,
  execute() {
    console.log(`v${packageInfo.license}`);
  }
};
