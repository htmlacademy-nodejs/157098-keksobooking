'use strict';

const {commands} = require(`./src/commands`);
const helpCmd = require(`./src/help`);

const inputParam = process.argv[2];

function reactOnUnknownCmd() {
  console.error(`Unknown command! The list of possible commands is below:`);
  helpCmd.execute();
  process.exit(1);
}

function startApp(param) {
  if (!param) {
    console.log(`Hello, user!
this program starts Keksobooking server.
Author: Igor Kucherenko`);

    return;
  }

  if (param && commands.hasOwnProperty(param)) {
    commands[param].execute();
  } else {
    reactOnUnknownCmd();
  }
}

startApp(inputParam);
