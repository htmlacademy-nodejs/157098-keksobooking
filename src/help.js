'use strict';

const versionCmd = require(`./version`);
const authorCmd = require(`./author`);
const descriptionCmd = require(`./description`);
const licenseCmd = require(`./license`);

const describedCommands = [
  versionCmd,
  authorCmd,
  descriptionCmd,
  licenseCmd,
];

module.exports = {
  input: `--help`,
  description: `Shows possible commands`,
  execute() {
    describedCommands.forEach((cmd) => console.log(`${cmd.input} - ${cmd.description}`));
  }
};
