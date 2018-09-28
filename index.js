'use strict';

const {commands} = require('./src/commands');

const USER_CMD = process.argv[2];

function reactOnUnknownCmd() {
  const helpCmd = commands.find((cmd) => cmd.input === '--help');

  console.error(`Unknown command! The list of possible commands is below:`);
  helpCmd.execute();
  process.exit(1);
}

function startApp(userCmd) {
  if (!userCmd) {
    console.log(`Hello, user!
this program starts Keksobooking server.
Author: Igor Kucherenko`);

    return;
  }

  const currentCmd = commands.find((cmd) => userCmd === cmd.input);

  if (currentCmd) {
    currentCmd.execute();
  } else {
    reactOnUnknownCmd();
  }
}

startApp(USER_CMD);
