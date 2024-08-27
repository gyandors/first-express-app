const fs = require("fs");

const products = fs.readFileSync("assets/products.json");
const parsedProducts = JSON.parse(products);

module.exports = class Product {
  constructor(title, quantity) {
    this.title = title;
    this.quantity = quantity;
  }

  save() {
    parsedProducts.push(this);
    fs.writeFileSync("./assets/products.json", JSON.stringify(parsedProducts));
  }

  static getAll() {
    return parsedProducts;
  }
};
