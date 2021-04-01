import { cart } from './cart-data.js';
import { denimStyles } from '../denimStyles.js';
import { createTableRow, findById, createTotalRow } from '../utils.js';

const table = document.querySelector('.item-table');

for (let cartItem of cart) {
    const productMatchesID = findById(denimStyles, cartItem.id);
    const trOfMatch = createTableRow(productMatchesID, cartItem);
    table.append(trOfMatch);
};

const totalTr = createTotalRow(denimStyles, cart);

table.append(totalTr);











































