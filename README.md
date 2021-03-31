## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

1. Create a data model for the product.  This is an object, or an array of objects. Ojbects are made using key-value pairs. Add:
    1. id - guaranteed unique id for our data item
    2. name - name to show user
    3. Image
    4. Description
    5. Category
    6. Price

2. Create two pages, home page and product page. 
3. Two stylesheets: 
    1. common/main.css
    2. products/products.css (page-specific)

4. Static design in html for one product. 
    1. make sure to create an add button whose value is the product ID.

5. Product Data (product.js)
    1. Make a new javascript file, named by the domain (denimStyles.js)
    2. 5 products
    3. Write out object literals for each product, storing in a variable with teh same name as product ID. These objects are key/value pairs whose values uniquely describe each product. All products should have SAME KEYS. 
    4. Create a variable that is an array of all your products 
        (const = denimStyles)
    5. export this array to utils.js, create a DOM GENERATION FUNCTION 
        createDenimStyleLi()

6. Generate Product List in products/products.js
    1. import your data (denimStyles.js)
    2. your DOM generation function from utils.js
    3. 'locate the list element where your products will go' = 
            const li = document.querySelector(.clothing-list');
    4. "loop through your data"
            i. "create a variable that is the singular of your domain list and assign based on the current array of index"
                for(let denimStyle of denimStyles) {

                }
            ii. "pass to your DOM generation function and capture result in variable
                 for(let denimStyle of denimStyles) {
                    const li = createDenimStyleLi(denimStyle)
                }
            iii. append to the top-level list element
                ul.append(li);



Looking For	Points (10)
Hosted on GitHub with URL in About section, Product HTML works and uses good Semantic Element choices	2
CSS used consciously and correctly	1
Products Object Literals and Array of all Products	2
DOM Render Function	3
Correctly orchestrate product generation in products.js using a for loop and your render function	2
TDD the DOM render function

-----

Shopping Cart
1, Write, test, and use a function that takes a shopping cart item and returns a tr for a table

export function findById(array, id) {
    for (let item of array) {
        if(item.id === id) {
            return item
        }
    }

export function findById(denimStyle, cartID) {
    for (let item of array) {
        if(denimStyle.id === cart.id) {
            return item
        }
    }

