const express = require('express');
const path = require('path');
const logger = require('./utils/logger')('server');
const config = require('./config');
const app = express();

app.use(express.static(path.join(__dirname, './collect-data/data')));
app.use('/d3', express.static(path.join(__dirname, './node_modules/d3/build/d3.js')));
app.use('/tools', express.static(path.join(__dirname, './utils')));

app.get('/network', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/network.html'));
});

app.get('/', (req, res) => {
  res.redirect('/network');
});

// let script = require(path.join(__dirname, './collect-data/collectData.js'))
//
// app.post('/collect', (req, res) => {
//   script.main(req, res);
// });

//listen to the server on port in config.js
logger('info', `Web server listening on port ${config.port}`)
app.listen(config.port);
