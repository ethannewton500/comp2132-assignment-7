/**
 * The following code is to calculate the price
 */

const displayPrice = $("#displayPrice")
const displayTotal = $("#displayTotal")

const userQuantity = $('#quantity')

const price = 20
const total = userQuantity.val() * price


displayPrice.text(price + ".00")
displayTotal.text(total + ".00")

function calculateTotal( event ) {
    const quantity = event.target.value
    const total = quantity * price

    displayTotal.text(total + ".00")
}
userQuantity.on("change", calculateTotal)

/**
 * The following code handles the color selctions and will also change the images addording to color
 */

const black = $("#black")
const red = $("#red")
const grey = $("#grey")

const thumb1 = $("#thumb1")
const thumb2 = $("#thumb2")
const thumb3 = $("#thumb3")

const mainImage = $("#mainImage")

function changeImagesColor( event ) {

  let mainImageView = $("#mainImage").attr("src").toString()

  mainImageView = mainImageView.split("-").pop(-1);
  
  if (mainImageView === "model.jpg") {
    mainImageView = "no-model.jpg"
  }


  if (black.is(":checked")) {
    mainImage.attr("src", "product-images/t-shirt-black-" + mainImageView)
    thumb1.attr("src", "product-images/t-shirt-black-no-model.jpg")
    thumb2.attr("src", "product-images/t-shirt-black-front.jpg")
    thumb3.attr("src", "product-images/t-shirt-black-back.jpg")
  } else if (red.is(":checked")) {
    mainImage.attr("src", "product-images/t-shirt-red-" + mainImageView)
    thumb1.attr("src", "product-images/t-shirt-red-no-model.jpg")
    thumb2.attr("src", "product-images/t-shirt-red-front.jpg")
    thumb3.attr("src", "product-images/t-shirt-red-back.jpg")
  } else if (grey.is(":checked")) {
    mainImage.attr("src", "product-images/t-shirt-grey-" + mainImageView)
    thumb1.attr("src", "product-images/t-shirt-grey-no-model.jpg")
    thumb2.attr("src", "product-images/t-shirt-grey-front.jpg")
    thumb3.attr("src", "product-images/t-shirt-grey-back.jpg")
  }

  console.log(mainImage.attr("src"))
}

const view = $("#subImages")

function changeMainImage( event ) {
  const image = event.target.src
  mainImage.attr("src", image)
}

black.on("change", changeImagesColor)
red.on("change", changeImagesColor)
grey.on("change", changeImagesColor)

thumb1.on("click", changeMainImage)
thumb2.on("click", changeMainImage)
thumb3.on("click", changeMainImage)