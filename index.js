'use strict';

const USER_CMD = process.argv[2];

const {commands} = require('./src/commands');

commands.find((cmd) => cmd.input === USER_CMD).execute();
