const express = require('express');
const process = require('process');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4040;

// body-parser helps to parse the request and create the req.body object
// parse requests of content-type : application/json
app.use(bodyParser.json());

// parse request of type content-type : application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Notes Application Server Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`Welcome to Notes Application Portal on ${process.pid}`);
});

const notes = require('./routes/router');
app.use('/api', notes);

module.exports = app;