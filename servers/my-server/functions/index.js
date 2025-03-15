import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/user', (req, res) => {
    res.send('You are getting a user data back!');
})

app.post('/user', (req, res) => {
    res.send("We created a new user with first name of " + req.body.firstName);
})

app.delete('/user', (req, res) => {
    res.send("We deleted a new user with first name of " + req.body.firstName);
})

app.put('/user', (req, res) => {
    res.send("We updated a new user with first name of " + req.body.firstName);
})

export const helloWorld = functions.https.onRequest(app);
