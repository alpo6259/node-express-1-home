const { Contacts } = require('./../models');

module.exports.getContacts = (req, res) => {
  const contacts = Contacts.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContacts = (req, res) => {
  const { body } = req;

  const newContact = Contacts.createContact(body);
  res.status(201).send(newContact);
};

module.exports.getContactById = (req, res) => {
  const { id } = req.params;
  const foundContact = Contacts.getContactById(id);
  if (foundContact) {
    res.status(200).send(foundContact);
    return;
  }
  res.status(404).send('contacts not found');
};

//test
module.exports.deleteContactById = (req, res) => {
  const { id } = req.params;
  const delContact = Contacts.deleteContact(id);
  if (delContact) {
    res.status(204).send('delete Contact');
    return;
  }
  res.status(404).send('contact not found');
};
