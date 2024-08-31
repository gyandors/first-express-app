const fs = require("fs");

const products = fs.readFileSync("data/products.json");
const parsedProducts = JSON.parse(products);

module.exports = class Product {
  constructor(title, quantity, price, image, description) {
    this.title = title;
    this.quantity = +quantity;
    this.price = +price;
    this.image = image;
    this.description = description;
  }

  save() {
    this._id = Date.now().toString();
    parsedProducts.push(this);
    fs.writeFileSync("./data/products.json", JSON.stringify(parsedProducts));
  }

  static getAll() {
    return parsedProducts;
  }

  static getById(id) {
    return parsedProducts.find((p) => p._id === id);
  }
};
