const config = require('../config.json');
const {Log} = require('./logger');

const checkKey = async (req, res, next) => {
    var key = req.headers['x-api-key'];
    var ipAddress = req.ip;

    if (config.app.key !== key) {
        res.status(403).send('Nebyl zadán platný API klíč!');
        Log(`[${ipAddress}] Request attempt failed - invalid API Key!`);
    }
    next();
}

const checkIP = async (req, res, next) => {
    var ipAddress = req.ip;

    if (!config.addresses.includes(ipAddress)) {
        res.status(403).send('Přístup z této IP adresy není oprávněný!');
        Log(`[${ipAddress}] Request attempt failed - unauthorized IP address!`);
    }
    next();
}

module.exports = {checkKey, checkIP}