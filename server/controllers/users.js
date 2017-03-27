const axios = require('axios');

module.exports = {
  signin: (req, res) => {
    const { email, password } = req.body;
    axios.post('https://testproject-api.strv.com/auth/native', { email, password })
    .then((data) => {
      res.json(data.data);
    })
    .catch(err => console.log(err));
  },
}
;
