import { findById } from './utils.js';



export function getCart() {
    const arrayTurnedString = localStorage.getItem('ALLTHINGSINCART');
    const stringTurnedArray = JSON.parse(arrayTurnedString);

    if (stringTurnedArray) {
        return stringTurnedArray;
    } return [];
}

export function setCart(cartAsArrayOfObjects){

    const arrayTurnedString = JSON.stringify(cartAsArrayOfObjects);
    localStorage.setItem('ALLTHINGSINCART', arrayTurnedString);

}

export function addItemToCart(productID, quantity) {

    const cartArray = getCart();

    const productMatch = findById(cartArray, productID);

    if (productMatch) {
        productMatch.quantity += Number(quantity);
    } else {
        const newItem = {
            id: productID,
            quantity: Number(quantity)
        };
        cartArray.push(newItem);
    }

    setCart(cartArray);

}
