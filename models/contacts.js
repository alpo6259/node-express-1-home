const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const contactsDB = [
  {
    id: 0,
    name: 'Test',
    telNumber: '+380123456789',
    birthday: '2000-12-01',
    isDone: false,
  },
  {
    id: -1,
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isDone: true,
  },
  {
    id: 4,
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isDone: true,
  },
];
class ContactsDB {
  constructor (arr) {
    this.contacts = [...arr];
  }

  createContact (newContact) {
    this.contacts.push({
      ...newContact,
      id: uuidv4(),
      isDone: false,
      createAt: new Date(),
    });
    return this.contacts[this.contacts.length - 1];
  }

  getContacts () {
    return [...this.contacts];
  }

  getContactById (id) {
    const foundIndex = this.contacts.findIndex(c => c.id === Number(id));
    return foundIndex === -1 ? null : this.contacts[foundIndex];
  }

  updateContact (id, values) {
    const foundContactIndex = this.contacts.findIndex(c => c.id === id);
    this.contacts[foundContactIndex] = {
      ...this.contacts[foundContactIndex],
      ...values,
    };
    return this.contacts[foundContactIndex];
  }

  deleteContact (id) {
    const foundContactIndex = this.contacts.findIndex(c => c.id === Number(id));
    this.contacts.splice(foundContactIndex, 1);
    return foundContactIndex === -1 ? null : this.contacts[foundContactIndex];
  }
}
const contactsDbInstace = new ContactsDB(contactsDB);

module.exports = contactsDbInstace;
