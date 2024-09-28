
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async(number) => {
    let contacts;
    try{
        const data = await readContacts();
        contacts = data;
        for (let i = 0; i < number; i += 1) {
            contacts.push(createFakeContact());
        }
        await writeContacts(contacts);
        return contacts;

    } catch (error) {
        return error;
    }
};

generateContacts(5);
