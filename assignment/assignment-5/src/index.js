const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid');

const port = 3000;

const publicDirectory = `${__dirname}/../public`;

app.use(express.json({
    verify: (request, response, buffer) => {
        try {
            JSON.parse(buffer);
        } catch (error) {
            response.status(406).send('JSON could not be successfully validated - please try again!');
        }
    }
}));

app.use(bodyParser.json());

app.post('/api', (request, response) => {
    let id = uuid.v4();

    fs.writeFile(`${publicDirectory}/${id}.json`, JSON.stringify(request.body, null, 4), (error) => {
        if (error) {
            response.status(500).send('An error was caught while writing the JSON file - please try again!');

        } else {
            response.location(`localhost:3000/api/${id}`);
            response.status(201).send('A JSON document has successfully been generated and stored.')
        }
    });
});

app.get('/api/:id', (request, response) => {
    // fill in get request here - responsibility: mj
});

app.put('/api/:id', (request, response) => {
    // fill in put request here - responsibility: robert
});

app.delete('/api/:id', (request, response) => {
    let file = `${publicDirectory}/${request.params.id}.json`;

    fs.access(file, fs.constants.F_OK, (error) => {
        if (error) {
            response.status(404).send('A JSON document with the provided unique identifier cannot be found - please try again!');

        } else {
            fs.rm(file, (error) => {
                if (error) {
                    response.status(500).send(`An error occurred while deleting document ${request.params.id} - please try again!`);

                } else {
                    response.status(200).send(`Document ${request.params.id} has been deleted successfully.`);
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`application is listening on port ${port}.`);
});