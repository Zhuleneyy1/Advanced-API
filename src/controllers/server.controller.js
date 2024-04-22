const fs = require('fs');
const {Log} = require('../services/logger');

const getServerData = async (req, res) => {
    fs.readFile('./src/server.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Nastala chyba při získávání serveru!');
            return;
        }

        res.status(200).json(JSON.parse(data));
    });
}

const editServerData = async (req, res) => {
    const {data, value} = req.params;
    const ip = req.ip;

    if (data && value) {
        fs.readFile('./src/server.json', 'utf8', (err, fileData) => {
            if (err) {
                console.log(err);
                res.status(500).send('Nepodařilo se načíst soubor!');
                return;
            }
            try {
                const serverData = JSON.parse(fileData);
                const oldValue = serverData[data];
                serverData[data] = value;

                fs.writeFile('./src/server.json', JSON.stringify(serverData, null, 2), (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Nastala chyba při úpravě souboru!');
                        return;
                    }
                    res.status(200).send('Soubor byl úspěšně upraven!');
                    Log(`[${ip}] | Edit server data - ${data} ${oldValue} -> ${value}`);
                });
            } catch (err) {
                console.log(err);
                res.status(500).send('Nastala chyba při zpracování dat!');
            }
        });

    } else {
        res.status(400).send('Nebyla vyplněná data a value!');
        Log(`[${ip}] | Error while edit server data - no value and data inserted!`);
    }
}

module.exports = {getServerData, editServerData};