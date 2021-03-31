import { createTableRow } from '../utils.js';
import { denimStyles } from '../denimStyles.js';
import { cart } from '../cart/cart-data.js';

const test = QUnit.test;

test('it sould take a cart line item and a denimstyle and return a table row', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = "<tr><td>The Curvy 90s Cheeky Jean</td><td>2</td><td>$156.00</td></tr>"
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createTableRow(cart[0], denimStyles[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});