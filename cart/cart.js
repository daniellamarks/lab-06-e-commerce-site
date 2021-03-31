import { denimStyles } from '../denimStyles.js';
import { cart } from './cart-data.js';
import { createTableRow, findById, createTotalRow } from '../utils.js';

console.log(denimStyles);

//grab the table from the dom
const table = document.querySelector('.item-table');
//we loop through our cart (id, quantity)

for (let cartItem of cart) {

        //start with cart and find all product matches. 
    const productMatch = findById(denimStyles, cartItem.id);
    //now i have the denim match, i need to 
    const tr = createTableRow(cartItem, productMatch);
    
    table.append(tr);
}
















