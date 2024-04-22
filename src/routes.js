const express = require('express');
const {checkKey, checkIP} = require('./services/auth');

const routes = express();
const server = require('./controllers/server.controller');

routes.get('/server', server.getServerData);
routes.post('/server/edit/:data/:value', server.editServerData);

module.exports = routes