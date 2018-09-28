'use strict';

const versionCmd = require(`./version`);
const authorCmd = require(`./author`);
const descriptionCmd = require(`./description`);
const licenseCmd = require(`./license`);
const helpCmd = require(`./help`);

const commands = {
  [versionCmd.input]: versionCmd,
  [authorCmd.input]: authorCmd,
  [descriptionCmd.input]: descriptionCmd,
  [licenseCmd.input]: licenseCmd,
  [helpCmd.input]: helpCmd,
};

module.exports = {
  commands,
};
