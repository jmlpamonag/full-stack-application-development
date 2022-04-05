const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid');

const port = 3000;

app.use(express.json({
    verify: (request, response, buffer, encoding) => {
        try {
            JSON.parse(encoding);
        } catch (error) {
            response.status(406).send('JSON could not be successfully validated - please try again!');
        }
    }
}));

app.post('/api', (request, response) => {
    // fill in post request here - responsibility: michael
});

app.get('/api/:id', (request, response) => {
    // fill in get request here - responsibility: mj
});

app.put('/api/:id', (request, response) => {
    // fill in put request here - responsibility: robert
});

app.delete('/api/:id', (request, response) => {
    // fill in delete request here - responsibility: michael
});

app.listen(port, () => {
    console.log(`application is listening on port ${port}.`);
});