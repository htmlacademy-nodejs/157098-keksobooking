const versionCmd = require(`./version`);
const authorCmd = require(`./author`);
const descriptionCmd = require(`./description`);
const licenseCmd = require(`./license`);
const helpCmd = require(`./help`);

const commands = [
  versionCmd,
  authorCmd,
  descriptionCmd,
  licenseCmd,
  helpCmd,
];

module.exports = {
  commands,
};
