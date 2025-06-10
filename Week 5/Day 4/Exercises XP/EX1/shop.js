// Import the products
const products = require('./products.js');

// Function to find a product by name
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  
  if (product) {
    console.log("Product found:");
    console.log(product);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

// Test
findProductByName("Laptop");
findProductByName("T-Shirt");
findProductByName("Smartphone"); // not in the list