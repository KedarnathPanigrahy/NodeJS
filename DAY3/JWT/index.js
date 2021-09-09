const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;



// app.use(()=>console.log("middleware"));

app.use(bodyParser.json());

app.use(cors());

// add routes

const router = require('./routes/router.js');

app.use('/api', router);

// run server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));