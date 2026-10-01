const allProduct = document.querySelector(".products");
products = [];
function displayProducts() {
  allProduct.innerHTML = "";
  products.forEach((product) => {
    allProduct.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
            <div class="card ">
              <img src="${product.thumbnail}" class="card-img-top" alt="Product Image">
              <div class="product-body ps-3  ">
                <h5 class="product-title pt-3"> Name: ${product.title}</h5>
                <p class="product-text mb-2 fst-italic">description: ${product.description}</p>
                <p class="product-price mb-2 ">price: ${product.price} $</p>
                <p class="product-brand mb-2 pb-2">type: ${product.tags}</p>
              </div>
            </div>
            </div>`;
  });
}
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((product) => {
      products.push(product);
      displayProducts();
    });
  });
