
export function findById(someArray, someID) {
    for (let item of someArray) {
        if (item.id === someID) 
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
    
    const button = document.createElement('button');
    button.id = denim.id;
    button.textContent = 'Add to bag';

    li.append(image, pName, pDescription, pCategory, pPrice, button);

    return li;

}

export function calcItemTotal(price, quantity) {
    const itemTotal = price * quantity;
    return itemTotal;
}

export function createTableRow(someCartItem, someDenimStyle) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = someDenimStyle.name;
    tdQuantity.textContent = someCartItem.quantity;

    // consttotalAsUSD = total.toLocaleString('en-us', config);

    tdPrice.textContent = `$${someDenimStyle.price * someCartItem.quantity}.00`;

    tr.append(tdName, tdQuantity, tdPrice);
    return tr;

}

export function createTotalRow(cartArray, denimStylesArray) {
    // 
    let sum = 0;

    for (let cartItem of cartArray) {    

        const matchingDenimStyle = findById(denimStylesArray, cartItem.id);

        const lineItem = matchingDenimStyle.price * cartItem.quantity;

        console.log(lineItem);

        sum += lineItem;
    }

    console.log(sum);

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.classList.add('estimated-total');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td3.classList.add('total-price');

    td1.textContent = `Estimated Total`;
    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);
    return tr;
}