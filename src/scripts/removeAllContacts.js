import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        const data = await readContacts();
        await writeContacts([]);
        return data;
    } catch (error) {
        return error;
    }
};

removeAllContacts();
