'use strict';

const versionCmd = require(`./version`);
const authorCmd = require(`./author`);
const descriptionCmd = require(`./description`);
const licenseCmd = require(`./license`);
const helpCmd = require(`./help`);

const commands = {
  '--version': versionCmd,
  '--author': authorCmd,
  '--description': descriptionCmd,
  '--license': licenseCmd,
  '--help': helpCmd,
};

module.exports = {
  commands,
};
