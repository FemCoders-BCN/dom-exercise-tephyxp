import { changeProductImage, changeButtonColor, changeTagColorAndText } from './firstPart.js';

const redColor = document.querySelector('.red');
const grayColor = document.querySelector('.gray');
const blackColor = document.querySelector('.black');

redColor.addEventListener('click', function() {
    changeProductImage('./public/img/redcar.jpg');
    changeButtonColor('red');
    changeTagColorAndText('red');
});

grayColor.addEventListener('click', function() {
    changeProductImage('./public/img/graycar.jpg');
    changeButtonColor('gray');
    changeTagColorAndText('gray');
});

blackColor.addEventListener('click', function() {
    changeProductImage('./public/img/blackcar.jpg');
    changeButtonColor('black');
    changeTagColorAndText('black');
});



// const redColor = document.querySelector('.red');
// const grayColor = document.querySelector('.gray');
// const blackColor = document.querySelector('.black');

// const productImage = document.querySelector('.product-image img');

// const addToCartButton = document.getElementById('button');

// const tagColor = document.querySelector('.tag');

// // Asignar eventos de clic a cada elemento de color
// redColor.addEventListener('click', function() {
//     productImage.src = './public/img/redcar.jpg';
//     addToCartButton.style.backgroundColor = 'red';
//     tagColor.style.backgroundColor = 'red';
//     tagColor.style.color = 'white'; 
// });

// grayColor.addEventListener('click', function() {
//     productImage.src = './public/img/graycar.jpg';
//     addToCartButton.style.backgroundColor = 'gray';
//     tagColor.style.backgroundColor = 'gray'; 
//     tagColor.style.color = 'white';  
// });

// blackColor.addEventListener('click', function() {
//     productImage.src = './public/img/blackcar.jpg';
//     addToCartButton.style.backgroundColor = 'black'; 
//     tagColor.style.backgroundColor = 'black'; 
//     tagColor.style.color = 'white'; 
// });
