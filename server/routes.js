const routes = require('express').Router();
const users = require('./controllers/users.js');
const events = require('./controllers/events.js');

routes.post('/', users.signin);

routes.get('/events', events.getAll);


module.exports = routes;
