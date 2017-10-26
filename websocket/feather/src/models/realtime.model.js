/* eslint-disable no-console */

// realtime-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');

  db.schema.createTableIfNotExists('realtime', table => {
    table.increments('id');
    table.string('text');
  })
  .then(() => console.log('Updated realtime table'))
  .catch(e => console.error('Error updating realtime table', e));

  return db;
};
