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


for (let cmd of Commands) {
  if (cmd.input === USER_CMD) {
    cmd.action();
    process.exit(0);
  }
}
