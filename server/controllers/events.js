const axios = require('axios');

module.exports = {

  getAll: (req, res) => {
    axios.get('https://testproject-api.strv.com/events')
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },

  attendEvent: (req, res) => {
    const token = req.get('token');
    const headers = {
      Authorization: token,
    };
    axios.post(`https://testproject-api.strv.com/events/${req.query.event_id}/attendees/me/`, {}, { headers })
    .then((data) => {
      console.log('attending');
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },

  flakeEvent: (req, res) => {
    const headers = {
      Authorization: req.get('token'),
    };
    axios({ method: 'delete', url: `https://testproject-api.strv.com/events/${req.query.event_id}/attendees/me/`, headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },

  updateEvent: (req, res) => {
    const headers = {
      Authorization: req.get('token'),
    };
    const data = {
      title: req.body.title,
      description: req.body.description,
      capacity: req.body.capacity,
      startsAt: req.body.startsAt,
    };
    axios({ method: 'patch', url: `https://testproject-api.strv.com/events/${req.query.event_id}`, data, headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },

  deleteEvent: (req, res) => {
    const headers = {
      Authorization: req.get('token'),
    };
    axios.delete(`https://testproject-api.strv.com/events/${req.query.event_id}`, { headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },

  createEvent: (req, res) => {
    const headers = {
      Authorization: req.get('token'),
    };
    axios.post('https://testproject-api.strv.com/events', req.body, { headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },
};
