const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
var MainImg=document.getElementById('MainImg');
var smallimg=document.getElementsByClassName('small-img');


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function (){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function (){
    MainImg.src = smallimg[3].src;
}

let cart=[];
const bagIcons = document.querySelectorAll('.fa-bag-shopping');
bagIcons.forEach(bagIcon => {
    bagIcon.addEventListener('click', addToCart);
});


function addToCart(event) {
    const productContainer = event.target.closest('.pro'); // Find the parent product container
    const productName = productContainer.querySelector('h5').textContent;
    const productPrice = parseFloat(productContainer.querySelector('h4').textContent.slice(1)); // Remove the '$' sign and convert to a number

    const item = {
        name: productName,
        price: productPrice,
    };

    cart.push(item);

    updateCartDisplay();

    alert(`Added ${productName} to the cart.`);
}

function updateCartDisplay() {
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = cart.length;
    }
}

updateCartDisplay();

