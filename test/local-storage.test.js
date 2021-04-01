const test = QUnit.test;

test('it should take a denimstyles element and return an li', (expect) => {

    const expected = `<li class="denim"><img src="../assets/cheekyjeanview2.jpeg"><p class="name">The Curvy 90s Cheeky Jean</p><p class="description">Vintage Sunbeached Blue</p><p class="category">4 washes available</p><p class="price">$78</p><button id="cheekyJean">Add to bag</button></li>`;

    const actual = createDenimStyleLi({
        id: 'cheekyJean',
        name: 'The Curvy 90s Cheeky Jean',
        image: '../assets/cheekyjeanview2.jpeg',
        description: 'Vintage Sunbeached Blue', 
        category: '4 washes available',
        price: 78
    });

    expect.equal(actual.outerHTML, expected);
});