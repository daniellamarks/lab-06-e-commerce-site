for (let cartItem of cart) {
    //for every cart item, render a tr element
    // how do i use the cartItem to find a match denimStyle?
        //need a findbyid function to loop 
    //we are going to find the correct digimon from the array of all digimon WITH the id of the cart that matches that digmon    

    //we need matchingdenim to get the name and price,
    //we need the cartItem to get the quantity

    //for each cart item, finds its matching denim style
    const matchingDenimStyle = findById(denimStyles, cartItem.id);

    console.log(matchingDenimStyle, cartItem);

    
    //use the denim style and the cart to make some html
    const tr = createTableRow(cartItem, matchingDenimStyle);
    //and append that tr to the table

  
    table.append(tr);
}

const totalRow = createTotalRow(cart, denimStyles);

table.append(totalRow);



export function createTotalRow(cartArray, denimStylesArray) {
    // 
    let sum = 0;

    for (let cartItem of cartArray) {    

        const matchingDenimStyle = findById(denimStylesArray, cartItem.id);

        const lineItem = matchingDenimStyle.price * cartItem.quantity;

        console.log(lineItem);

        sum += lineItem;
    }