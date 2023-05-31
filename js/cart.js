const cart = document.querySelectorAll(".add-to-cart");
const counter = document.getElementById("counter");
const cartPreview = document.getElementById("cart-preview");

const cartItems = [];
cart.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      const pizzaImage =
        e.target.parentElement.parentElement.parentElement.children[0].children[0].getAttribute(
          "src"
        );

      const pizzaName =
        e.target.parentElement.parentElement.children[0].textContent;

      const pizzaFilling =
        e.target.parentElement.parentElement.parentElement.children[1]
          .children[1].textContent;
      console.log(pizzaName);
      console.log(cart);
      const pizzaPrice = parseInt(
        e.target.parentElement.parentElement.children[2].dataset.price
      );
      console.log(pizzaPrice);
      const pizzaItems = {
        pizzaName: pizzaName,
        pizzaFilling: pizzaFilling,
        pizzaImage: pizzaImage,
        pizzaPrice: pizzaPrice,
      };
      console.log(pizzaItems);
      cartItems.push(pizzaItems);
      counter.textContent = cartItems.length;
      e.target.textContent = "Added to Cart";
    }
    console.log(cartItems);

    // Update Cart Preview
    const cartPreviewItem = document.createElement("div");
    cartItems.map((item) => {
      cartPreviewItem.innerHTML = `
      <div class="cart-item">
      <i class="fa-solid fa-xmark"></i>
      <img src=${item.pizzaImage}
      <p>${item.pizzaName}</p>
      <p>${item.pizzaPrice}</p>
      <input type="number"  min=1 max=10 />
      </div>
      `;
      cartPreview.appendChild(cartPreviewItem);

      console.log(item);
    });
  });
});
