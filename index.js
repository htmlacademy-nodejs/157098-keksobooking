const CURRENT_VERSION = '0.0.1';
const USER_CMD = process.argv[2];

const Commands = [
  {
    input: '--help',
    description: 'печатает этот текст',
    action() {
      for (let cmd of Commands) {
        console.log(`${cmd.input} - ${cmd.description}`);
      }
    },
  },
  {
    input: '--version',
    description: 'печатает версию приложения',
    action() {
      console.log(`v${CURRENT_VERSION}`)
    },
  },
];

const startApp = function () {
  if (!USER_CMD) {
    const noUserCmdMessage = 'Привет, пользователь!\n' +
      'Эта программа будет запускать сервер «Кексобукинг».\nАвтор: Кучеренко Игорь.';

    console.log(noUserCmdMessage);
    return;
  }

  for (let cmd of Commands) {
    if (cmd.input === USER_CMD) {
      cmd.action();
      return;
    }
  }

  const unknownCmdMessage = 'Неизвестная команда "' + USER_CMD + '".\n' +
    'Чтобы прочитать правила использования приложения, наберите "--help"';

  console.error(unknownCmdMessage);
  process.exit(1);
};

startApp();
