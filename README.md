## TETRAN - RECRUITMENT API PROJECT
A very simple Express.js API example for my recruitment for this project.

## START APPLICATION
> The application can be turned on with a command `node app` or `npm run dev`, by inserting it in terminal.
> The default port of application is 3000, you can change it in **src/config.json**.

## INSTALLATION
> You can clone the project within git, insert command `git clone https://github.com/vertycz/tetran-api.git`

## FUNCTIONS
> The project is very easy, you can get informations via endpoint `/server`, that returns the JSON object of server info, like status, whitelist, TPS, ram etc., it must be manually edited, via endpoint `/server/edit/:data/:value`.
> Also, it logging any action, such as invalid request, edit server data, etc.

> **:data** is the object, like this: `"status"` - the status field.
> **:value** is the object, like this: `"offline"` - the value of status field.