const axios = require('axios');

module.exports = {
  signin: (req, res) => {
    const { email, password } = req.body;
    axios.post('https://testproject-api.strv.com/auth/native', { email, password })
    .then((output) => {
      const resObject = {
        data: output.data,
        token: output.headers.authorization,
      };
      res.json(resObject);
    })
    .catch(err => console.log(err));
  },
}
;
