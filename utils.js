

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
    button.id = 'cheekyJean';
    button.textContent = 'Add to cart';

    li.append(image, pName, pDescription, pCategory, pPrice, button);

    return li;

}