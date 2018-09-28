const versionCmd = require(`./version`);
const authorCmd = require(`./author`);
const helpCmd = require(`./help`);

const commands = [
  versionCmd,
  authorCmd,
  helpCmd,
];

module.exports = {
  commands,
};
