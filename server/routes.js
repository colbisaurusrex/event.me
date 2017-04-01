const routes = require('express').Router();
const users = require('./controllers/users.js');
const events = require('./controllers/events.js');

routes.post('/sigin', users.signin);
routes.post('/signup', users.signup);
routes.get('/events', events.getAll);
routes.post('/events', events.attendEvent);
routes.delete('/events', events.flakeEvent);
routes.patch('/events', events.updateEvent);
routes.delete('/singleevent', events.deleteEvent);
routes.post('/createevent', events.createEvent);

module.exports = routes;
