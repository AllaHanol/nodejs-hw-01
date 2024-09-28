
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    let contacts;
    const contact = createFakeContact();
    try {
      const data = await readContacts();
      contacts = data;
      contacts.push(contact);
      await writeContacts(contacts);
      return contacts;
    } catch (error) {
      return error;
    }
  };

  addOneContact();
