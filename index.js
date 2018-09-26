const CURRENT_VERSION = '0.0.1';
const USER_CMD = process.argv[2];

const commands = [
  {
    input: '--help',
    description: 'печатает этот текст',
    action() {
      commands.forEach((cmd) => console.log(`${cmd.input} - ${cmd.description}`));
    },
  },
  {
    input: '--version',
    description: 'печатает версию приложения',
    action() {
      console.log(`v${CURRENT_VERSION}`);
    },
  },
];

const startApp = function () {
  if (!USER_CMD) {
    const noUserCmdMessage = `Привет, пользователь!
Эта программа будет запускать сервер «Кексобукинг».
Автор: Кучеренко Игорь`;

    console.log(noUserCmdMessage);
    return;
  }

  for (const cmd of commands) {
    if (cmd.input === USER_CMD) {
      cmd.action();
      return;
    }
  }

  const unknownCmdMessage = `Неизвестная команда "${USER_CMD}"
Чтобы прочитать правила использования приложения, наберите "--help"`;

  console.error(unknownCmdMessage);
  process.exit(1);
};

startApp();
