const routes = require('express').Router();
const users = require('./controllers/users.js');
const events = require('./controllers/events.js');

routes.post('/', users.signin);

routes.get('/events', events.getAll);
routes.post('/events/', events.attendEvent);
routes.delete('/events', events.flakeEvent);
routes.patch('/events', events.updateEvent);

module.exports = routes;
