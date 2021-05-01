let products = [
    {
        bookTitle: 'The King of Drugs',
        bookAuthor: 'Nora Barrett',
        oldPrice: 27.74,
        bookPrice: 13.72,
        bookRating: 3.5,
        bookImage: 'action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg',
        bookLabel: 'label.svg',
        bookCategory: 'fiction-label.svg'
    },
    {
        bookTitle: 'Sunset',
        bookAuthor: 'Robert Peeter',
        oldPrice: 21.99,
        bookPrice: 14.99,
        bookRating: 4.0,
        bookImage: 'kindle-design-template-4848bc9c78148b167c616f139fd60fc1_screen.jpg',
        bookLabel: 'hot-label.svg',
        bookCategory: 'non-fiction-label.svg'
    },
    {
        bookTitle: 'Left Alone',
        bookAuthor: 'Michael Brown',
        oldPrice: 26.79,
        bookPrice: 22.41,
        bookRating: 4.5,
        bookImage: 'intriguing-thriller-book-cover-design-template-3d1c88f0ad32678f487a32f8c778c3b1_screen.jpg',
        bookLabel: 'hot-label.svg',
        bookCategory: 'teens-label.svg'
    },
    {
        bookTitle: 'A New Vision to Success',
        bookAuthor: 'David Markson',
        oldPrice: 21.49,
        bookPrice: 18.25,
        bookRating: 3.0,
        bookImage: 'marketing-guide-self-help-book-cover-design-template-9a262d1a28d5ca87f62d7d13186f2731_screen.jpg',
        bookLabel: 'label.svg',
        bookCategory: 'non-fiction-label.svg'
    },
    {
        bookTitle: 'The Baking Cookbook',
        bookAuthor: 'Martha Rendenson',
        oldPrice: 19.89,
        bookPrice: 12.45,
        bookRating: 4.5,
        bookImage: 'pink-cookbook-cover-design-template-14f54349a65197b03463d9bcca9aae15_screen.jpg',
        bookLabel: 'label.svg',
        bookCategory: 'wellness-label.svg'
    },
    {
        bookTitle: 'Rise Above Wilderness',
        bookAuthor: 'Kenneth Smith',
        oldPrice: 25.99,
        bookPrice: 14.99,
        bookRating: 1.5,
        bookImage: 'motivational-self-help-book-cover-design-template-549362a7c9d568279e866eb81510239c_screen.jpg',
        bookLabel: 'label.svg',
        bookCategory: 'non-fiction-label.svg'
    },
    {
        bookTitle: 'The Night Profecy',
        bookAuthor: 'Mara Franzis',
        oldPrice: 24.99,
        bookPrice: 17.99,
        bookRating: 5.0,
        bookImage: 'fantasy-night-book-cover-design-template-035f9a97865bb03cabe1b1cca3871543_screen.jpg',
        bookLabel: 'label.svg',
        bookCategory: 'fiction-label.svg'
    },
    {
        bookTitle: 'Secret Recipes',
        bookAuthor: 'Ken Adams',
        oldPrice:  19.26,
        bookPrice: 9.63,
        bookRating: 4.5,
        bookImage: 'cookbook-cover-template-design-20457a93aa7f163c4975e96713a90a33_screen.jpg',
        bookLabel: 'hot-label.svg',
        bookCategory: 'wellness-label.svg'
    },
    {
        bookTitle: 'Drawn to the Sky',
        bookAuthor: 'Ken Adams',
        oldPrice: 25.43,
        bookPrice: 14.89,
        bookRating: 3.0,
        bookImage: 'night-drawing-black-book-cover-design-template-ea74bc762820a4c4a426e4df9f3897ef_screen.jpg',
        bookLabel: 'hot-label.svg',
        bookCategory: 'popularity-label.svg'
    },
    {
        bookTitle: 'Ensaladas',
        bookAuthor: 'Silvia Bechamel',
        oldPrice: 25.43,
        bookPrice: 12.56,
        bookRating: 3.5,
        bookImage: 'caratula-de-libro-de-recetas-de-ensaladas-design-template-5734d23e3c3900de9fd394218b419e97_screen.jpeg',
        bookLabel: 'hot-label.svg',
        bookCategory: 'wellness-label.svg'
    }

];

// ------------------ TOGGLE FUNCTION ---------------------
// dropdown menu toggle -----------------------------------
document.querySelector('.menu-toggle').addEventListener('click', openMenu);

function openMenu() {
    document.querySelector('.menu').classList.toggle("active");
}

// ------------------ GALLERY FUNCTION ------------------
// gallery ----------------------------------------------
// adds a click event for gallery button that sets image to active
const allButtons = document.querySelector('#controls');

allButtons.addEventListener('click', function(event) {
    const theBtn = event.target;

    if (theBtn.matches('.gallery-button:not(.active)')) {
        const activeBtn = document.querySelector('.gallery-button.active');
        const activeImg = document.querySelector('.gallery-img.active');

        activeBtn.classList.remove('active');
        activeImg.classList.remove('active');
        
        const imgId = theBtn.getAttribute('aria-controls');
        const theImg = document.querySelector(`#${imgId}`);

        theBtn.classList.add('active');
        theImg.classList.add('active');
        console.log('clicked');
    }
});

// ------------------ CART FUNCTION --------------------
// update shopping bag ---------------------------------

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

updateCart();