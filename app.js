const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/config.json');
const routes = require('./src/routes');
const limiter = require('./src/services/ratelimit');
const {checkIP, checkKey, checkOrigin} = require('./src/services/auth');
const {logMessage} = require('./src/utils/messagelogger');

const app = express();
logMessage('green', '[INFO] Starting server...');

const middlewares = () => {
    app.use(cors());
    app.set('trust proxy', 1);
    app.use(bodyParser.json());
    app.use(limiter);
    app.use(checkOrigin);
    app.use(checkIP);
    app.use(checkKey);
    app.use('/', routes);
}

middlewares();

app.listen(config.app.port, () => {
    return logMessage('green', `[INFO] Server has started on port ${config.app.port}!`);
});