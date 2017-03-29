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
    console.log(token);
    console.log(req.query.event_id);
    axios.post(`https://testproject-api.strv.com/events/${req.query.event_id}/attendees/me/`, {}, { headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },
  flakeEvent: (req, res) => {
    const headers = {
      Authorization: req.body.token,
    };
    axios({ method: 'delete', url: `https://testproject-api.strv.com/events/${req.query.event_id}/attendees/me/`, headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },
  updateEvent: (req, res) => {
    const headers = {
      Autorization: req.body.tokn,
    };
    axios.patch(`https://testproject-api.strv.com/events/${req.query.event_id}`)
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err));
  },
}
;
