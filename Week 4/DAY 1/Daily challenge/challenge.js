// Daily challenge: Groceries
let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

// 1 Display fruits
const displayGroceries = () => {
  for (const fruit of groceries.fruits) {
    console.log(fruit);
  }
};

// 2 Clone groceries and demonstrate pass by value/reference
const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log("user:", user);
  // Output: John
  console.log("client:", client);
  // Output: Betty

  let shopping = groceries;

  // Modify values through reference
  shopping.totalPrice = "35$";
  shopping.other.paid = false;

  // Log to show changes are reflected in original groceries object
  console.log("groceries.totalPrice:", groceries.totalPrice);
  // Output: 35$
  console.log("groceries.other.paid:", groceries.other.paid);
  // Output: false
};

// Run
displayGroceries();
cloneGroceries();