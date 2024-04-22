const fs = require('fs');

const Log = async (message) => {
    fs.appendFile('./src/dir/logs.txt', `[${new Date().toUTCString()}] ${message}\n`, (err) => {
        if (err) {
            return console.log(err);
        }
    });
}

module.exports = {Log};