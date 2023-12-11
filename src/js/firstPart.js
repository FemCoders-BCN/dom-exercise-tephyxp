function changeProductImage(src) {
    const productImage = document.querySelector('.product-image img');
    productImage.src = src;
}

function changeButtonColor(color) {
    const addToCartButton = document.getElementById('button');
    addToCartButton.style.backgroundColor = color;
}

function changeTagColorAndText(color) {
    const tagColor = document.querySelector('.tag');
    tagColor.style.backgroundColor = color;
    tagColor.style.color = 'white';
}

export { changeProductImage, changeButtonColor, changeTagColorAndText };
