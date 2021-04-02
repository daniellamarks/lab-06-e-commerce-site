// IMPORT MODULES under test here:
import { createDenimStyleLi, findById, calcItemTotal, createTableRow, calcOrderTotal, createTotalRow } from '../utils.js';
import { cart } from '../cart/cart-data.js';
import { denimStyles } from '../denimStyles.js';

const test = QUnit.test;

test('it should take a denimstyles element and return an li', (expect) => {

    const expected = `<li class="denim"><img src="../assets/cheekyjeanview2.jpeg"><p class="name">The Curvy 90s Cheeky Jean</p><p class="description">Vintage Sunbeached Blue</p><p class="category">4 washes available</p><p class="price">$78</p><button>Add to bag</button></li>`;

    const actual = createDenimStyleLi({
        id: 'cheekyJean',
        name: 'The Curvy 90s Cheeky Jean',
        image: '../assets/cheekyjeanview2.jpeg',
        description: 'Vintage Sunbeached Blue', 
        category: '4 washes available',
        price: 78
    });

    expect.equal(actual.outerHTML, expected);
});


test('should take an array and an id and return the first item found that has an .id property that matches the passed id', (expect) => {
    
    const expected1 = cart[0];
    const actual1 = findById(cart, 'cheekyJean');
    const expected2 = cart[1];
    const actual2 = findById(cart, 'easyJean');

    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
});

test('should take in a quantity and amount and return total', (expect) => {

    const expected = 12;
    const actual = calcItemTotal(3, 4);
    const expected2 = 156;
    const actual2 = calcItemTotal(denimStyles[0].price, cart[0].quantity);

    expect.equal(expected, actual);
    expect.equal(expected2, actual2);
    
});

test('it should take in a quantity and product and render a table row that matches html', (expect) => {

    const expected = `<tr class="tr"><td class="td">The Curvy 90s Cheeky Jean</td><td class="td">2</td><td class="td">$156.00</td></tr>`;

    const actual = createTableRow(denimStyles[0], cart[0]);


    expect.equal(actual.outerHTML, expected);
});

test('taking in the cart array and the products array, calculates the total of cart data', (expect) => {

    const expected = 528;
    const actual = calcOrderTotal(denimStyles, cart);
    expect.deepEqual(expected, actual);
    
});

test('it should take the relational data and return a row with a label and total price', (expect) => {

    const expected = `<tr><td class="estimated-total">Estimated Total</td><td> </td><td class="total-price">$528.00</td></tr>`;
    const actual = createTotalRow(denimStyles, cart);

    expect.deepEqual(actual.outerHTML, expected);
});