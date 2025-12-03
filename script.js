let products = [
  { name: "Laptop", price: 55000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 30000 },
  { name: "Headphones", price: 2000 }
];


let productContainer = document.getElementById("product-list");

products.forEach((product, i) => {
  let div = document.createElement("div");
  div.className = "product-item";
  div.innerHTML = `<h4>${product.name}</h4><p>Price: ₹${product.price}</p>`;
  productContainer.appendChild(div);
});
