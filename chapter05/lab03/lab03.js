console.log("lab 03");

const pr1 = {
  name: "ao gio",
  price: 200,
  inStock: true,
};

const pr2 = {
  name: "ao len",
  price: 500,
  inStock: true,
};

const pr3 = {
  name: "ao khoac",
  price: 300,
  inStock: false,
};

const pr4 = {
  name: "quan kaki",
  price: 300,
  inStock: true,
};

const pr5 = {
  name: "ao mua",
  price: 150,
  inStock: false,
};

const products = [pr1, pr2, pr3, pr4, pr5];

console.log(products);

const firstProduct = products[0];
console.log("1. San pham first name: ", firstProduct.name);

pr2.price = 150;
console.log("2. update price pr2 = 150: ", products);
