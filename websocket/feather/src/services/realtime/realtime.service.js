// Initializes the `realtime` service on path `/realtime`
const createService = require('feathers-knex');
const createModel = require('../../models/realtime.model');
const hooks = require('./realtime.hooks');
const filters = require('./realtime.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'realtime',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/realtime', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('realtime');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
