import { denimStyles } from '../denimStyles.js';
import { cart } from '../cart/cart-data.js';
import { calcOrderTotal } from '../utils.js';

const test = QUnit.test;

test('takes the cart array and products array and calculates the total of your cart data as the expected value', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 528;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(denimStyles, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});