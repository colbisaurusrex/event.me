const axios = require('axios');

module.exports = {
  signin: (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    axios.post('https://testproject-api.strv.com/auth/native', { email, password })
    .then((output) => {
      res.set('Authorization', output.headers.authorization);
      res.json(output.data);
    })
    .catch(err => console.log(err));
  },
}
;
