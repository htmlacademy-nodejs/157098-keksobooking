'use strict';

const versionCmd = require(`./version`);
const authorCmd = require(`./author`);
const descriptionCmd = require(`./description`);
const licenseCmd = require(`./license`);
const colors = require(`colors/safe`);

const describedCommands = [
  versionCmd,
  authorCmd,
  descriptionCmd,
  licenseCmd,
];

module.exports = {
  input: `--help`,
  description: `Показывает список команд`,
  execute() {
    describedCommands.forEach((cmd) => console.log(`${colors.grey(cmd.input)} - ${colors.green(cmd.description)}`));
  }
};
