import { getCart, setCart, addItemToCart } from '../local-storage-utils.js';


const test = QUnit.test;


const stubCart = [
    {
        id: 4,
        quantity: 5,
    },
    {
        id: 3,
        quantity: 2
    }
];


test('setCart should put our cart into localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = stubCart
    
    setCart(expected);

    const actual = JSON.parse(localStorage.getItem('ALLTHINGSINCART'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);
});

test('getCart should get our cart(all items) from local storage', (expect) => {

    const arrayTurnedString = JSON.stringify(stubCart);

    localStorage.setItem('ALLTHINGSINCART', arrayTurnedString);

    const cart = getCart();

    expect.deepEqual(stubCart, cart);

});

test('addItemToCart should add an item to (cart)local storage', (expect) => {

    const expected = [
        {
            id: 4,
            quantity: 6,
        },
        {
            id: 3,
            quantity: 2
        }
    ];
    
    const arrayTurnedString = JSON.stringify(stubCart);
    localStorage.setItem('ALLTHINGSINCART', arrayTurnedString);

    addItemToCart(4);

    const actual = JSON.parse(localStorage.getItem('ALLTHINGSINCART'));

    expect.deepEqual(expected, actual);
});