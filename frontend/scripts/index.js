import { products } from "../data/product.js";
// Function to generate star ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '';
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    stars += halfStar;
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="fa-regular fa-star"></i>';
    }
    return stars;
}


function createProductCard(product, category) {
    if (category.includes(product.category)) {
        return `
      <div class="crd">
        <img src="${product.image}" alt="${product.name}" onclick="showProduct(${product.id})">
        <div class="crd-text">
          <h3>${product.name}</h3>
          <p>$${product.new_price.toFixed(2)}</p>
          <div class="stars">${generateStars(product.rating)}</div>
         <button onclick="exploreProduct(${product.id})">Explore it</button>

        </div>
      </div>
    `;
    }
}

function exploreProduct(productId) {
    window.location.href = `../pages/explore.html?id=${productId}`;
}
window.exploreProduct = exploreProduct;

function createCards() {
    const womenCardContainer = document.getElementById("women");
    const menCardContainer = document.getElementById("men");
    const kidCardContainer = document.getElementById("kid");
    const featuredCardContainer = document.getElementById("featured-card");
    const featuredProducts = products.filter(p => p.rating >= 3);



    const shopProducts = products;


    featuredCardContainer.innerHTML = featuredProducts.map(product => createProductCard(product,["men","women" , "kid"])).join("");
    womenCardContainer.innerHTML = shopProducts.map(p => createProductCard(p, ["women"])).join("");
    menCardContainer.innerHTML = shopProducts.map(p => createProductCard(p, ["men"])).join("");
    kidCardContainer.innerHTML = shopProducts.map(p => createProductCard(p, ["kid"])).join("");
}

// Function to add product to cart
// function addToCart(productId) {
//     // alert(`Product ${productId} added to cart!`);
//     // // Update cart count
//     // const cartCount = document.querySelector(".nav-cart-count");
//     // cartCount.textContent = parseInt(cartCount.textContent) + 1;
//     location.href = "../pages/about.html";
// }

// Function to show product details (cart section not present in HTML, so we'll alert for now)
function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Product: ${product.name}\nPrice: $${product.new_price.toFixed(2)}\nRating: ${product.rating}`);
    // If a cart section is added later, update this to display product details
}

// Navigation functions
function hideAllSections() {
    document.querySelectorAll('.main, .trend, .footer , .newsletter , .product-detail').forEach(element => {
        element.style.display = 'none';
    });
}

function allColorBlack() {
    document.querySelectorAll('.nav-links li a').forEach(element => {
        element.style.color = 'black';
        element.style.backgroundColor = 'white';

    });
}

function homes() {
    hideAllSections();
    allColorBlack();
    document.querySelector('.main').style.display = 'flex';
    document.querySelector('.trend').style.display = 'block';
    document.querySelector('.footer').style.display = 'flex';
    document.querySelector('.nav-links li:nth-child(1) a').style.color = 'rgb(255, 255, 255)';
    document.querySelector('.nav-links li:nth-child(1) a').style.backgroundColor = ' #ff6200';

}

function shops() {
    hideAllSections();
    allColorBlack();
    document.querySelector('#shop-sec').style.display = 'block';
    document.querySelector('.footer').style.display = 'flex';
    document.querySelector('.nav-links li:nth-child(2) a').style.color = 'rgb(255, 255, 255)';
    document.querySelector('.nav-links li:nth-child(2) a').style.backgroundColor = ' #ff6200';

}

function blogs() {
    hideAllSections();
    allColorBlack();
    document.querySelector('.footer').style.display = 'flex';
    document.querySelector('.nav-links li:nth-child(3) a').style.color = 'rgb(255, 255, 255)';
    document.querySelector('.nav-links li:nth-child(3) a').style.backgroundColor = ' #ff6200';

}

function contacts() {
    hideAllSections();
    allColorBlack();
    document.querySelector('.footer').style.display = 'flex';
    document.querySelector('.nav-links li:nth-child(4) a').style.color = 'rgb(255, 255, 255)';
    document.querySelector('.nav-links li:nth-child(4) a').style.backgroundColor = ' #ff6200';

}

document.addEventListener("DOMContentLoaded", () => {
    createCards();
    document.querySelector('.nav-links li:nth-child(1) a').addEventListener('click', homes);
    document.querySelector('.nav-links li:nth-child(2) a').addEventListener('click', shops);
    document.querySelector('.nav-links li:nth-child(3) a').addEventListener('click', blogs);
    document.querySelector('.nav-links li:nth-child(4) a').addEventListener('click', contacts);
});

const bannerImages = [
    "../img/frontbanner/img1.png",
    "../img/frontbanner/img2.png",
    "../img/frontbanner/img3.png",
    "../img/frontbanner/img4.png"
];
let currentBannerIndex = 0;

function imageChange() {
    document.getElementById('ads').src = bannerImages[currentBannerIndex];
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
}

setInterval(imageChange, 3000);