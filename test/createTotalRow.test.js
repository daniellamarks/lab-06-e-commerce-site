import { createTotalRow } from '../utils.js';
import { denimStyles } from '../denimStyles.js';
import { cart } from '../cart/cart-data.js';

const test = QUnit.test;

test('it should take the relational data and return a row with a label and total price', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td class="estimated-total">Estimated Total</td><td> </td><td class="total-price">$528.00</td></tr>`
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createTotalRow(denimStyles, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});