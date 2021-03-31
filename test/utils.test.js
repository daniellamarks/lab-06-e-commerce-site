// IMPORT MODULES under test here:
import { createDenimStyleLi } from '../utils.js';

const test = QUnit.test;

test('it should take a denimstyles element and return an li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="denim"><img src="../assets/cheekyjeanview2.jpeg"><p class="name">The Curvy 90s Cheeky Jean</p><p class="description">Vintage Sunbeached Blue</p><p class="category">4 washes available</p><p class="price">$78</p><button id="cheekyJean">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createDenimStyleLi({
    id: 'cheekyJean',
    name: 'The Curvy 90s Cheeky Jean',
    image: '../assets/cheekyjeanview2.jpeg',
    description: 'Vintage Sunbeached Blue', 
    category: '4 washes available',
    price: 78
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

