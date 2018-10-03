'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--license`,
  description: `Показывает лицензию`,
  execute() {
    console.log(`${packageInfo.license}`);
  }
};
