'use strict';

const {commands} = require(`./src/commands`);
const helpCmd = require(`./src/help`);

const inputParam = process.argv[2];

function reactOnUnknownCmd() {
  console.error(`Неизвестная команда! Список доступных команд:`);
  helpCmd.execute();
  process.exit(1);
}

function startApp(param) {
  if (!param) {
    console.log(`Привет, пользователь!
эта программа запускает сервер Кексобукинг.
Автор: Кучеренко Игорь`);

    return;
  }

  if (param && commands.hasOwnProperty(param)) {
    commands[param].execute();
  } else {
    reactOnUnknownCmd();
  }
}

startApp(inputParam);
