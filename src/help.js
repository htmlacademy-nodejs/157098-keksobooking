'use strict';

const {commands} = require(`./commands`);

module.exports = {
  input: `--help`,
  description: `Shows possible commands`,
  execute() {
    commands.forEach((cmd) => {
      if (cmd.hasOwnProperty('input')) {
        console.log(`${cmd.input} - ${cmd.description}`);
      }
    })
  }
};
