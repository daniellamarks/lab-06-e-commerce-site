import { denimStyles } from '../denimStyles.js';
import { cart } from './cart-data.js';
import { createTableRow, findById, createTotalRow } from '../utils.js';

console.log(denimStyles);

//grab the table from the dom
const table = document.querySelector('.item-table');
//we loop through our cart (id, quantity)
for (let cartItem of cart) {
    //for every cart item, render a tr element
    // how do i use the cartItem to find a match denimStyle?
        //need a findbyid function to loop 
    //we are going to find the correct digimon from the array of all digimon WITH the id of the cart that matches that digmon    

    //we need matchingdenim to get the name and price,
    //we need the cartItem to get the quantity

    //for each cart item, finds its matching denim style
    const matchingDenimStyle = findById(denimStyles, cartItem.id);

    console.log(matchingDenimStyle, cartItem);

    
    //use the denim style and the cart to make some html
    const tr = createTableRow(cartItem, matchingDenimStyle);
    //and append that tr to the table

  
    table.append(tr);
}

const totalRow = createTotalRow(cart, denimStyles);

table.append(totalRow);