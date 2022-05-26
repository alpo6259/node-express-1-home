const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/contacts', contactsController.getContacts);

app.post('/contacts', contactsController.createContacts);

app.get('/contacts/:id', contactsController.getContactById);

//test
app.delete('/contacts/:id', contactsController.deleteContactById);

module.exports = app;
