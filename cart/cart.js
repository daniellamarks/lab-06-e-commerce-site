import { denimStyles } from '../denimStyles.js';
import { cart } from './cart-data.js';
import { createTableRow, findById, calcOrderTotal } from '../utils.js';


const table = document.querySelector('.item-table');

for (let cartItem of cart) {

    const productMatch = findById(denimStyles, cartItem.id);
    const tr = createTableRow(cartItem, productMatch);
    
    table.append(tr);
};


















