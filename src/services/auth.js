const config = require('../config.json');
const {Log} = require('./logger');

const checkKey = async (req, res, next) => {
    var apiKey = req.headers['x-api-key'];
    var ipAddress = req.ip;

    if (apiKey === config.app.key) {
        next();
    } else {
        res.status(403).send('Nebyl zadán platný API klíč!');
        Log(`[${ipAddress}] Request attempt failed - invalid API Key!`);
    }
}

const checkIP = async (req, res, next) => {
    var ipAddress = req.ip;

    if (config.addresses.includes(ipAddress)) {
        next();
    } else {
        res.status(403).send('Přístup z této IP adresy není oprávněný!');
        Log(`[${ipAddress}] Request attempt failed - unauthorized IP address!`);
    }
}

const checkOrigin = async (req, res, next) => {
    var origin = req.headers.origin;

    if (config.origins.includes(origin)) {
        next();
    } else {
        res.status(403).send('Přístup z tohoto webu není oprávněný!');
        Log(`[${origin}] Request attempt failed - unauthorized Origin address!`);
    }
}

module.exports = {checkKey, checkIP, checkOrigin}