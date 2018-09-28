'use strict';

const {commands} = require(`./src/commands`);

const USER_CMD = process.argv[2];
const HELP_CMD = commands[`--help`];

function reactOnUnknownCmd() {
  console.error(`Unknown command! The list of possible commands is below:`);
  HELP_CMD.execute();
  process.exit(1);
}

function startApp(userCmd) {
  if (!userCmd) {
    console.log(`Hello, user!
this program starts Keksobooking server.
Author: Igor Kucherenko`);

    return;
  }

  if (userCmd && commands.hasOwnProperty(userCmd)) {
    commands[userCmd].execute();
  } else {
    reactOnUnknownCmd();
  }
}

startApp(USER_CMD);
