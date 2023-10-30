/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
/**
 * The following code is to calculate the price
 */

const displayPrice = $('#displayPrice');
const displayTotal = $('#displayTotal');

const userQuantity = $('#quantity');

const price = 20;
const total = userQuantity.val() * price;

let returnedQuantity = 1;

displayPrice.text(price + '.00');
displayTotal.text(total + '.00');

function calculateTotal( event ) {
  const quantity = event.target.value;
  const total = quantity * price;

  if (quantity >= 1) {
    displayTotal.text(total + '.00');
    if (sizeSelected) {
      submitButton.prop('disabled', false);
    };
  } else {
    displayTotal.text('n o p e');
    submitButton.prop('disabled', true);
    submitButton.text('Buy more shirts');
  }
  returnedQuantity = quantity;
}
userQuantity.on('change', calculateTotal);

/**
 * The following code handles the color selctions and will
  also change the images addording to color
 */

const black = $('#black');
const red = $('#red');
const grey = $('#grey');

const colorMessage = $('#colorMessage');

const thumb1 = $('#thumb1');
const thumb2 = $('#thumb2');
const thumb3 = $('#thumb3');

const mainImage = $('#mainImage');

function changeImagesColor( event ) {
  let mainImageView = $('#mainImage').attr('src').toString();

  mainImageView = mainImageView.split('-').pop(-1);

  if (mainImageView === 'model.jpg') {
    mainImageView = 'no-model.jpg';
  }


  if (black.is(':checked')) {
    mainImage.attr('src', 'product-images/t-shirt-black-' + mainImageView);
    thumb1.attr('src', 'product-images/t-shirt-black-no-model.jpg');
    thumb2.attr('src', 'product-images/t-shirt-black-front.jpg');
    thumb3.attr('src', 'product-images/t-shirt-black-back.jpg');
    colorMessage.text('Black');
  } else if (red.is(':checked')) {
    mainImage.attr('src', 'product-images/t-shirt-red-' + mainImageView);
    thumb1.attr('src', 'product-images/t-shirt-red-no-model.jpg');
    thumb2.attr('src', 'product-images/t-shirt-red-front.jpg');
    thumb3.attr('src', 'product-images/t-shirt-red-back.jpg');
    colorMessage.text('Red');
  } else if (grey.is(':checked')) {
    mainImage.attr('src', 'product-images/t-shirt-grey-' + mainImageView);
    thumb1.attr('src', 'product-images/t-shirt-grey-no-model.jpg');
    thumb2.attr('src', 'product-images/t-shirt-grey-front.jpg');
    thumb3.attr('src', 'product-images/t-shirt-grey-back.jpg');
    colorMessage.text('Grey');
  }

  console.log(mainImage.attr('src'));
}

function changeMainImage( event ) {
  const image = event.target.src;
  mainImage.attr('src', image);
}

black.on('change', changeImagesColor);
red.on('change', changeImagesColor);
grey.on('change', changeImagesColor);

thumb1.on('click', changeMainImage);
thumb2.on('click', changeMainImage);
thumb3.on('click', changeMainImage);

/**
 * The following code handles the size selctions
 */


const sizeRadios = $('input:radio[name="size"]');

const displaySize = $('#displaySize');

const submitButton = $('#submit');

const sizeSelected = false

function changeSize(event) {
  const selectedSize = $(this).val();

  displaySize.text(selectedSize);

  if (returnedQuantity >= 1) {
    submitButton.prop('disabled', false);
  }

  submitButton.text('Add to Cart');

  sizeSelected = true;
}

sizeRadios.on('change', changeSize);
