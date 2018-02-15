const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
var mailgun = require("mailgun-js");
var api_key = 'key-2c624a1a7dbc93b806abeb40bfca882a';
var DOMAIN = 'sandbox794bc578bb09430fb0881c01e1224ec9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

const app = express();

var data = {
    from: 'matthewsheridansmith@gmail.com',
    to: 'matthewsheridansmith@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };


app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
//app.get('/:id', (req, res) => res.send(Widgets.getById(req.params.id)));
app.post('/', function(req, res) {
    
    // mailgun.messages().send(data, function (error, body) {
    //     console.log(body);
    //   });
    res.status(200).send(req.body);
});
//app.post('/', (req, res) => res.status(200).send("hey there"));
// app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
// app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
app.get('/', (req, res) => res.status(200).send(`Hey There.  Today is ${Date.now()}`));

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
