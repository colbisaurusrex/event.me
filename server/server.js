const axios = require('axios');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on ${port}`));
