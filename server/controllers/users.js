const axios = require('axios');

module.exports = {
  signin: (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    axios.post('https://testproject-api.strv.com/auth/native', { email, password })
    .then((output) => {
      const resObject = {
        data: output.data,
        token: output.headers.authorization,
        user_id: output.data.id,
      };
      res.json(resObject);
    })
    .catch(err => console.log(err));
  },

  signup: (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    console.log(req.body);
    axios.post('https://testproject-api.strv.com/users', { email, password, firstName, lastName })
    .then((output) => {
      const resObject = {
        data: output.data,
        token: output.headers.authorization,
        user_id: output.data.id,
      };
      res.json(resObject);
    })
    .catch(err => console.log(err));
  },
}
;
