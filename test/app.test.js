// firstPart.test.js
import {
  changeProductImage,
  changeButtonColor,
  changeTagColorAndText,
} from '../src/js/firstPart';

test('changeProductImage should update product image source', () => {
  // Mock the required elements
  document.body.innerHTML = `
      <div class="product-image">
          <img src="" alt="Product Image">
      </div>
  `;

  // Test the function
  changeProductImage('./path/to/new-image.jpg');
  const productImage = document.querySelector('.product-image img');
  expect(productImage.src).toMatch(/http:\/\/localhost(:\d+)?\/path\/to\/new-image.jpg/);
});

test('changeButtonColor should update button color', () => {
  // Mock the required elements
  document.body.innerHTML = `
      <button id="button">Add to Cart</button>
  `;

  // Test the function
  changeButtonColor('red');
  const addToCartButton = document.getElementById('button');
  expect(addToCartButton.style.backgroundColor).toBe('red');
});

test('changeTagColorAndText should update tag color and text', () => {
  // Mock the required elements
  document.body.innerHTML = `
      <div class="tag">Sample Tag</div>
  `;

  // Test the function
  changeTagColorAndText('blue');
  const tagColor = document.querySelector('.tag');
  expect(tagColor.style.backgroundColor).toBe('blue');
  expect(tagColor.style.color).toBe('white');
});


