const knex = require('knex');

module.exports = function () {
  const app = this;
  const { client, connection } = app.get('nedb');
  const db = knex({ client, connection });

  app.set('knexClient', db);
};
