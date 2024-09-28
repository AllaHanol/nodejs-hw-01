
import { readContacts } from '../utils/readContacts.js';


export const countContacts =  async() => {
    let allContacts;
    let count = 0;
    try {
        const data = await readContacts();
        allContacts = data;
        for (let i = 0; i < allContacts.length; i += 1) {
            count += 1;
        }
        return count;
    } catch (error) {
        return error;
    }
};

console.log(await countContacts());
