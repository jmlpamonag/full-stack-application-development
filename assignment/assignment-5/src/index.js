import { v4 as uuidv4 } from 'uuid';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

const port = 3000;

app.post('/api/jsonBlob', (request, response) => {
    // fill in post request here
});

app.get('/api/jsonBlob/:blobId', (request, response) => {
    // fill in get request here
});

app.put('/api/jsonBlob/:blobId', (request, response) => {
    // fill in put request here
});

app.delete('/api/jsonBlob/:blobId', (request, response) => {
    // fill in delete request here
});