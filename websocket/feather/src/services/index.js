const realtime = require('./realtime/realtime.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(realtime);
};
