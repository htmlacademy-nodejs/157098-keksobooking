'use strict';

const packageInfo = require(`../package.json`);

module.exports = {
  input: `--description`,
  description: `Показывает описание`,
  execute() {
    console.log(`${packageInfo.description}`);
  }
};
