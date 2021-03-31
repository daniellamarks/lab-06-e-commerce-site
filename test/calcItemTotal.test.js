import { denimStyles } from '../denimStyles.js';
import { cart } from '../cart/cart-data.js';
import { calcItemTotal } from '../utils.js';

const test = QUnit.test;

test('takes a quantity and an amount and returns the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 156;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(denimStyles[0].price, cart[0].quantity);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});