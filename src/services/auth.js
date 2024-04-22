const config = require('../config.json');
const {Log} = require('./logger');

const checkKey = async (req, res, next) => {
    var apiKey = req.headers['x-api-key'];
    var ipAddress = req.ip;

    if (config.app.apiKey === apiKey) {
        next();
    } else {
        res.status(403).send('Nebyl zadán platný API klíč!');
        Log(`[${ipAddress}] Request attempt failed - invalid API Key!`);
    }
}

const checkIP = async (req, res, next) => {
    var ipAddress = req.ip;

    if (ipAddress && config.addresses.includes(ipAddress)) {
        next();
    } else {
        res.status(403).send('Přístup z této IP adresy není oprávněný!');
        Log(`[${ipAddress}] Request attempt failed - unauthorized IP address!`);
    }
}

module.exports = {checkKey, checkIP}