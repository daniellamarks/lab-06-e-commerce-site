// import { cart } from './cart-data.js';
import { denimStyles } from '../denimStyles.js';
import { getCart } from '../local-storage-utils.js';
import { createTableRow, findById, createTotalRow } from '../utils.js';

const table = document.querySelector('.item-table');
const checkoutButton = document.getElementById('checkout-button');

const cart = getCart();

if (cart.length < 1) {
    checkoutButton.disabled = true;
    checkoutButton.classList.add('gray');
}

for (let cartItem of cart) {
    const productMatchesID = findById(denimStyles, cartItem.id);
    const trOfMatch = createTableRow(productMatchesID, cartItem);
    table.append(trOfMatch);
}

const totalTr = createTotalRow(denimStyles, cart);

table.append(totalTr);

checkoutButton.addEventListener('click', () => {
    const arrayTurnedString = JSON.stringify(cart, true, 2);
    alert(arrayTurnedString);
    
    localStorage.clear();

    window.location = '../index.html';
});







































