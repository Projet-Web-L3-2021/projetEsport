const express = require('express');
const https = require('https');
const app = express();
const port = 3000;
const cors = require('cors');
// You can get api key from openweathermap.org
//const { api_key } = require('./weather_api_config.json');
//const api_key= "40170a02e70a9dafdceed1c03133ef7b";

app.use(cors());
console.log("HELLO");
app.get('/', (req, res) => {
    res.send('It works!');
});

app.get('/tournament/:tournament', (req, res) => {
    if (!req.params.tournament) {
        res.status(500);
        res.send({ 'cod': '404', 'message': 'You haven\'t specified the tournament!' });
        console.log('You haven\'t specified the tournament!');
    }

    // 5 day forecast with 3-hour step
    https.get(`https://api.smash.gg/tournament/${req.params.tournament}`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log('The whole response has been received!');
            res.send(JSON.parse(data));
        });

    // An error has been received.
    }).on('error', (err) => {
        res.status(500);
        res.send({ 'cod': '404', 'message': 'An api-error has been received' });
        console.log('Error: ' + err.message);
    });
});

app.get('/tournament/:tournament/event/:event', (req, res) => {
   

    // 5 day forecast with 3-hour step
    https.get(`https://api.smash.gg/tournament/${req.params.tournament}/event/${req.params.event}`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log('The whole response has been received!');
            res.send(JSON.parse(data));
        });

    // An error has been received.
    }).on('error', (err) => {
        res.status(500);
        res.send({ 'cod': '404', 'message': 'An api-error has been received' });
        console.log('Error: ' + err.message);
    });
});

app.listen(port, () => {
    console.log(`smashgg listening at port: ${port}`);
});