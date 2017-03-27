const axios = require('axios');

module.exports = {
  getAll: (req, res) => {
    axios.get('https://testproject-api.strv.com/events')
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },
}
;
