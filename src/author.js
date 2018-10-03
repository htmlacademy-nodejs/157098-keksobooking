'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--author`,
  description: `Показывает автора`,
  execute() {
    console.log(`${packageInfo.author}`);
  }
};
