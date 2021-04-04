import { addItemToCart } from './local-storage-utils.js';

export function findById(array, iD) {
    for (let item of array) {
        if (item.id === iD) 
            return item;
    }
}

export function createDenimStyleLi(denim) {
    const li = document.createElement('li');

    li.classList.add('denim');
    
    const image = document.createElement('img');
    image.src = denim.image;

    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = denim.name;
    
    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = denim.description;
    
    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = denim.category;
    
    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${denim.price}`;
    const addButton = document.createElement('button');
    addButton.id = denim.id;
    addButton.textContent = 'Add to bag';
    
    const span = document.createElement('span');
    span.textContent = 'Quantity: ';
    
    const select = document.createElement('select');

    for (let i = 0; i < 6; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        select.append(option);
    }
  
    addButton.addEventListener('click', () => {
        addItemToCart(denim.id, select.value);
        addButton.textContent = `Added to bag \u2713`;

    });

    li.append(image, pName, pDescription, pCategory, pPrice, span, select, addButton);

    return li;

}

export function calcItemTotal(price, quantity) {
    const itemTotal = price * quantity;
    return itemTotal;
}


export function createTableRow(productArrayItem, cartArrayItem) {

    const tr = document.createElement('tr');
    tr.classList.add('tr');
    const tdName = document.createElement('td');
    tdName.classList.add('td');
    const tdQuantity = document.createElement('td');
    tdQuantity.classList.add('td');
    const tdPrice = document.createElement('td');
    tdPrice.classList.add('td');

    tdName.textContent = productArrayItem.name;
    tdQuantity.textContent = cartArrayItem.quantity;
    tdPrice.textContent = `$${calcItemTotal(productArrayItem.price, cartArrayItem.quantity)}.00`;

    tr.append(tdName, tdQuantity, tdPrice);
    return tr;

}

export function calcOrderTotal(productArray, cartArray) {
    let orderTotal = 0;

    for (let cartItem of cartArray) {
        const productMatchesId = findById(productArray, cartItem.id);
        const lineItemTotal = calcItemTotal(productMatchesId.price, cartItem.quantity);
        
        orderTotal += lineItemTotal;
    }

    return orderTotal;

}

export function createTotalRow(productArray, cartArray) {

    const result = calcOrderTotal(productArray, cartArray);
   
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.classList.add('estimated-total');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td3.classList.add('total-price');
    tr.append(td1, td2, td3);

    td1.textContent = 'Estimated Total';
    td2.textContent = ' ',
    td3.textContent = `$${result}.00`;
    
    return tr;
}











