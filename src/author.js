'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--author`,
  description: `Shows the program's author`,
  execute() {
    console.log(`v${packageInfo.author}`);
  }
};
