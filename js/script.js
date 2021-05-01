let products = [
    {
        bookTitle: 'The King of Drugs',
        bookAuthor: 'Nora Barrett',
        bookPrice: 13.72,
        bookRating: 3.5,
        bookImage: 'action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg',
        bookLabel: 'label.svg',
        bookCategory: 'fiction-label.svg'
    },
    {
        bookTitle: 'Sunset',
        bookAuthor: 'Robert Peeter',
        bookPrice: 14.99,
        bookRating: 4.0,
        bookImage: 'kindle-design-template-4848bc9c78148b167c616f139fd60fc1_screen.jpg',
        bookCategory: 'non-fiction-label.svg'
    },
    {
        bookTitle: 'Left Alone',
        bookAuthor: 'Michael Brown',
        bookPrice: 22.41,
        bookRating: 4.5,
        bookImage: 'intriguing-thriller-book-cover-design-template-3d1c88f0ad32678f487a32f8c778c3b1_screen.jpg',
        bookCategory: 'teens-label.svg'
    },
    {
        bookTitle: 'A New Vision to Success',
        bookAuthor: 'David Markson',
        bookPrice: 18.25,
        bookRating: 3.0,
        bookImage: 'marketing-guide-self-help-book-cover-design-template-9a262d1a28d5ca87f62d7d13186f2731_screen.jpg',
        bookCategory: 'non-fiction-label.svg'
    },
    {
        bookTitle: 'The Baking Cookbook',
        bookAuthor: 'Martha Rendenson',
        bookPrice: 12.45,
        bookRating: 4.5,
        bookImage: 'pink-cookbook-cover-design-template-14f54349a65197b03463d9bcca9aae15_screen.jpg',
        bookCategory: 'wellness-label.svg'
    },
    {
        bookTitle: 'Rise Above Wilderness',
        bookAuthor: 'Doe Brooks',
        bookPrice: 14.99,
        bookRating: 1.5,
        bookImage: 'motivational-self-help-book-cover-design-template-549362a7c9d568279e866eb81510239c_screen.jpg',
        bookCategory: 'non-fiction-label.svg'
    },
    {
        bookTitle: 'The Night Profecy',
        bookAuthor: 'Mara Franzis',
        bookPrice: 24.99,
        bookRating: 5.0,
        bookImage: 'fantasy-night-book-cover-design-template-035f9a97865bb03cabe1b1cca3871543_screen.jpg',
        bookCategory: 'fiction-label.svg'
    },
    {
        bookTitle: 'Secret Recipes',
        bookAuthor: 'Ken Adams',
        bookPrice: 15.52,
        bookRating: 4.5,
        bookImage: 'cookbook-cover-template-design-20457a93aa7f163c4975e96713a90a33_screen.jpg',
        bookCategory: 'wellness-label.svg'
    },
    {
        bookTitle: 'Drawn to the Sky',
        bookAuthor: 'Ken Adams',
        bookPrice: 25.43,
        bookRating: 3.0,
        bookImage: 'night-drawing-black-book-cover-design-template-ea74bc762820a4c4a426e4df9f3897ef_screen.jpg',
        bookCategory: 'popularity-label.svg'
    }

];

console.table(products);

//rebuild products in js assigning list elements, text content and images
//rebuild article not list item
//remove products from html after put in js
//appendChild at end ------------------------------------

let productTable = document.querySelector('.grid-container')

products.forEach((product) => {
    let oneProduct = document.createElement(`article`)
    oneProduct.classList.add(`product`)
    oneProduct.innerHTML = `
    <header>
        <a href="product.html"><img src="img/${product.bookImage}" alt="${product.bookTitle}"></a>
        <div class="book-label"><img src="img/${product.bookCategory}" alt="${product.bookCategory}" width="80%"></div>
        <h3>${product.bookTitle}</h3>
        <h4>by ${product.bookAuthor}</h4>
        <img src="img/label.svg" alt="label classifying new item" width="75">
        <data value="39"><del>$18.99</del> <ins>$${product.bookPrice}</ins></data>
        <dl>
        <dt>Rating</dt>
        <dd>${product.bookRating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span><span class="material-icons">star_border</span></dd>
        </dl>
    </header>
    <form>
        <fieldset>
        <legend>Type</legend>
        <ul>
            <li>
            <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Hardcover</span>
            </label>
            </li>
            <li>
            <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>Paperback</span>
            </label>
            </li>
            <li>
            <label class="my-checkbox">
                <input type="checkbox"/> 
                <span>eBook</span>
            </label>
            </li>
        </ul>
        </fieldset>
    </form>
    <footer>
        <button type="button" class="add-cart"><span class="material-icons"></span>Add to Cart</button>
    </footer>
`
productTable.appendChild(oneProduct);

});

//replace function with arrow as shortcut
/*let printProduct = ((book) => {
    console.log(`${book.bookTitle} ${book.bookAuthor}: ${book.bookPrice} ${book.bookRating}`);
})

products.forEach(printProduct)*/

products.forEach((book) => { 
    console.log(`${book.bookTitle} ${book.bookAuthor}: ${book.bookPrice} ${book.bookRating}`)
});

// dropdown menu toggle -----------------------------------
document.querySelector('.menu-toggle').addEventListener('click', openMenu);

function openMenu() {
    document.querySelector('.menu').classList.toggle("active");
}

// filter with radio buttons ------------------------------
// filters duplicate data, can print duplicate array


// update shopping bag ---------------------------------

let cart = document.querySelectorAll('.add-cart');

// for all products
for (let i = 0; i < products.length; i++) {
    console.log(i, products[i]);
}

// add a click event when Add to Cart button is pressed
for(let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        console.log("Added to cart");
        addedToCart();
    })
}

// access local storage to store cart/bag value
function updateCart() {
    let cartItems = localStorage.getItem('addedToCart');

    if(cartItems) {
        document.querySelector('.cart span').textContent = cartItems;
    }
}

// update physical cart value (text) to number of clicks and store this value in local storage
function addedToCart() {
    let cartItems = localStorage.getItem('addedToCart');
    cartItems = parseInt(cartItems);

    if (cartItems) {
        localStorage.setItem('addedToCart', cartItems + 1); 
        document.querySelector('.cart span').textContent = cartItems + 1; 
    }
    else {
        localStorage.setItem('addedToCart', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

updateCart()
localStorage.clear()
