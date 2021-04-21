let products = [
    {
        bookTitle: 'The King of Drugs',
        bookAuthor: 'Nora Barrett',
        bookPrice: 13.70,
        bookRating: 3.5,
    },
    {
        bookTitle: 'Sunset',
        bookAuthor: 'Robert Peeter',
        bookPrice: 14.99,
        bookRating: 4.0,
    },
    {
        bookTitle: 'Left Alone',
        bookAuthor: 'Michael Brown',
        bookPrice: 22.40,
        bookRating: 4.5,
    },
    {
        bookTitle: 'A New Vision to Success',
        bookAuthor: 'David Markson',
        bookPrice: 18.20,
        bookRating: 3.0,
    },
    {
        bookTitle: 'The Baking Cookbook',
        bookAuthor: 'Martha Rendenson',
        bookPrice: 12.40,
        bookRating: 4.5,
    },
    {
        bookTitle: 'Rise Above Wilderness',
        bookAuthor: 'Doe Brooks',
        bookPrice: 14.99,
        bookRating: 1.5,
    },
    {
        bookTitle: 'The Night Profecy',
        bookAuthor: 'Mara Franzis',
        bookPrice: 24.99,
        bookRating: 5.0,
    },
    {
        bookTitle: 'Secret Recipes',
        bookAuthor: 'Ken Adams',
        bookPrice: 15.50,
        bookRating: 4.5,
    },
    {
        bookTitle: 'Drawn to the Sky',
        bookAuthor: 'Ken Adams',
        bookPrice: 25.40,
        bookRating: 3.0,
    }

];

// update shopping bag
let cart = document.querySelectorAll('.add-cart');

for (let i = 0; i < products.length; i++) {
    console.log(i, products[i]);
}

for(let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        console.log("Added to cart");
        addedToCart();
    })
}

function updateCart() {
    let cartItems = localStorage.getItem('addedToCart');

    if(cartItems) {
        document.querySelector('.cart span').textContent = cartItems;
    }
}

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

// sort by different values

function sortBy() {
    let selectOption = document.querySelectorAll('#sort');
    let optionValue = document.querySelectorAll('#sort option');

    selectOption.addEventListener('change')
    
}

products.sort(function(a,b) {
    return a.bookPrice - b.bookPrice;
});

products.addEventListener
console.log(products);

