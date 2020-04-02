const forever = require('forever-monitor');
const child = new (forever.Monitor)('zluxServer.js', {
  silent: false,
  killTree: true,
  spinSleepTime: 1000,
  minUptime: 2000,
  command: process.env.NODE_BIN,
  args: process.argv
});

child.start();
