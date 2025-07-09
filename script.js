const container = document.getElementById("container");

async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data)
    displayProducts(data)
}
fetchData();

function displayProducts(products) {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card"
        const image = document.createElement('img');
        image.className = "product-image";
        image.src = product.image;
        image.alt = product.title;
        const title = document.createElement("p");
        title.className = "product-title"
        title.textContent = product.title;
        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = `price: ${product.price}`;
        const button = document.createElement("button");
        button.className = "add-to-cart-btn";
        button.textContent = "Add to cart";
        productCard.append(image, title, price, button);
        container.append(productCard);
    })
}