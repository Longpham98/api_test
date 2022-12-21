const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv');

env.config({path: 'variables.env'});
const port = process.env.PORT || 5000;


// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

let routes = require('./routes');

routes(app);

app.listen(port);

console.log('Rest api server started on port '+port);