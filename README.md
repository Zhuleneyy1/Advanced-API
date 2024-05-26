## ADVANCED API PROJECT
> A advanced Express.js REST API example.

## START APPLICATION
> The application can be turned on with a command `node app` or `npm run start`, by inserting it in terminal.
> The default port of application is 3000, you can change it in **src/config.json**.

## INSTALLATION
> You can clone the project within git, insert command `git clone https://github.com/Zhuleneyy1/Advanced-API.git`.
> With use API with website, ensure you're added the x-api-key to headers in your get/post method in code and you have allowed IP and origin (url address with https/http) of your web hosting (it can be allowed in file **src/config.json**).

## FUNCTIONS
> The project is very easy, you can get informations via endpoint `/server`, that returns the JSON object of server info, like status, whitelist, TPS, ram etc., it must be manually edited, via endpoint `/server/edit/:data/:value`.
> Also, it logging any action, such as invalid request, edit server data, etc.
> API is also secure, using ApiKey, IP access and Cors.

> **:data** is the object, like this: `"status"` - the status field.

> **:value** is the object, like this: `"offline"` - the value of status field.