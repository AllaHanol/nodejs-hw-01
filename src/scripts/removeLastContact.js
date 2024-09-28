import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        const lastContact = data.pop();
        await writeContacts(data);
        return lastContact;
    } catch (error) {
        return error;
    }
};

removeLastContact();
