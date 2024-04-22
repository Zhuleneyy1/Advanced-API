const express = require('express');
const cors = require('cors');
const config = require('./src/config.json');
const routes = require('./src/routes');
const limiter = require('./src/services/ratelimit');
const {checkIP, checkKey} = require('./src/services/auth');
const {logMessage} = require('./src/utils/messagelogger');

const app = express();
logMessage('green', '[INFO] Probíhá spouštění serveru...');

const middlewares = () => {
    app.use(cors());
    app.set('trust proxy', 1);
    app.use(limiter);
    app.use(checkIP);
    app.use(checkKey);
    app.use('/', routes);
}

middlewares();

app.listen(config.app.port, () => {
    return logMessage('green', `[INFO] Server byl spuštěn na portu ${config.app.port}!`);
});