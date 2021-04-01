import { findById } from './utils.js';

//get data(like an item that is an object ) INTO local storage

//please explain magic string again ... const CART = 'CART'

export function getCart() {
    //if cart is empty return an empty array
    //if there is something in cart then turn that string into an object array
    const arrayTurnedString = localStorage.getItem('ALLTHINGSINCART');
    const stringTurnedArray = JSON.parse(arrayTurnedString);
    const checkoutButton = document.getElementById('checkout-button');

    if (stringTurnedArray) {
        return stringTurnedArray;
    } return [];
}

export function setCart(cartAsArrayOfObjects){

    //turns array into string
    const arrayTurnedString = JSON.stringify(cartAsArrayOfObjects);
    //puts string in storage
    localStorage.setItem('ALLTHINGSINCART', arrayTurnedString);

}

export function addItemToCart(productID) {

    const cartArray = getCart();

    const productMatch = findById(cartArray, productID);

    if (productMatch) {
        productMatch.quantity++;
    } else {
        const newItem = {
            id: productID,
            quantity: 1
        };
        cartArray.push(newItem);
    }

    setCart(cartArray);


}