import { findById } from '../utils.js';
// import { denimStyles } from '../denimStyles.js';
import { cart } from '../cart/cart-data.js';

const test = QUnit.test;

test('should take an array and an id and return the first item found that has an .id property that matches the passed id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 'cheekyJean',
        quantity: 2
    }

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(cart, 'cheekyJean');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});