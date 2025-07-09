// import { products , getProductById} from "../data/product.js";

// function getProductIdFromURL() {
//     const params = new URLSearchParams(window.location.search);
//     return parseInt(params.get("id"));
// }

// function generateStars(rating) {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '';
//     let stars = '';
//     for (let i = 0; i < fullStars; i++) {
//         stars += '<i class="fa-solid fa-star"></i>';
//     }
//     stars += halfStar;
//     for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
//         stars += '<i class="fa-regular fa-star"></i>';
//     }
//     return stars;
// }

// function renderProduct(product) {
//     const container = document.getElementById("explore-product-container");
//     container.innerHTML = `
//         <div class="product-detail-card">
//             <img src="${product.image}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p><strong>Price:</strong> $${product.new_price.toFixed(2)}</p>
//             <div class="stars">${generateStars(product.rating)}</div>
//             <p><strong>Category:</strong> ${product.category}</p>
//             <p>${product.description || "No detailed description available."}</p>
//             <button onclick="window.history.back()">Go Back</button>
//         </div>
//     `;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const productId = getProductIdFromURL();
//     const product = products.find(p => p.id === productId);
//     if (product) {
//         renderProduct(product);
//     } else {
//         document.getElementById("explore-product-container").innerHTML = `<p>Product not found.</p>`;
//     }
// });


// import { products } from "../data/product.js";

// function getProductIdFromURL() {
//     const params = new URLSearchParams(window.location.search);
//     return parseInt(params.get("id"));
// }

// function generateStars(rating) {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '';
//     let stars = '';
//     for (let i = 0; i < fullStars; i++) {
//         stars += '<i class="fa-solid fa-star"></i>';
//     }
//     stars += halfStar;
//     for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
//         stars += '<i class="fa-regular fa-star"></i>';
//     }
//     return stars;
// }

// function renderProduct(product) {
//     // Fill product image
//     const imageElement = document.querySelector('.product-image img');
//     imageElement.src = product.image;
//     imageElement.alt = product.name;

//     // Fill product name
//     document.querySelector('.product-title').textContent = product.name;

//     // Fill product price
//     document.querySelector('.product-price').textContent = `$${product.new_price.toFixed(2)}`;

//     // Fill rating
//     document.querySelector('.product-rating').innerHTML = `${generateStars(product.rating)} (${product.rating})`;

//     // Fill description (optional fallback)
//     document.querySelector('.product-description').textContent = product.description || "No detailed description available.";

//     // Set the Add to Cart button's ID (optional enhancement)
//     const addToCartButton = document.querySelector('.add-to-cart');
//     addToCartButton.setAttribute('onclick', `addToCart(${product.id})`);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const productId = getProductIdFromURL();
//     const product = products.find(p => p.id === productId);

//     if (product) {
//         renderProduct(product);
//     } else {
//         document.querySelector('.product-container').innerHTML = `<p>Product not found.</p>`;
//     }
// });


// ../scripts/product-detail.js
import { products } from "../data/product.js";

function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '';
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fa-solid fa-star"></i>';
    stars += halfStar;
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) stars += '<i class="fa-regular fa-star"></i>';
    return stars;
}

function renderProduct(product) {
    const imageElement = document.querySelector('.product-image img');
    imageElement.src = product.image;
    imageElement.alt = product.name;

    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-price').textContent = `$${product.new_price.toFixed(2)}`;
    document.querySelector('.product-rating').innerHTML = `${generateStars(product.rating)} (${product.rating})`;
    document.querySelector('.product-description').textContent = product.description || "No detailed description available.";

    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.onclick = () => addToCart(product.id);
}

export function addToCart(productId) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const size = document.getElementById('size').value;

    if (quantity < 1 || quantity > 10) {
        alert('Please select a quantity between 1 and 10.');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Product not found.');
        return;
    }

    const cartItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        size,
        quantity,
        pricePerUnit: product.new_price,
        totalPrice: quantity * product.new_price
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

}

document.addEventListener("DOMContentLoaded", () => {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);
    if (product) renderProduct(product);
    else document.querySelector('.product-container').innerHTML = `<p>Product not found.</p>`;
});
