const fs = require("fs");

const products = fs.readFileSync("data/products.json");
const parsedProducts = JSON.parse(products);

module.exports = class Product {
  constructor(_id, title, quantity, price, image, description) {
    this._id = _id;
    this.title = title;
    this.quantity = +quantity;
    this.price = +price;
    this.image = image;
    this.description = description;
  }

  save() {
    if (this._id) {
      const index = parsedProducts.findIndex((p) => p._id === this._id);
      parsedProducts[index] = this;
    } else {
      this._id = Date.now().toString();
      parsedProducts.push(this);
    }

    fs.writeFileSync("./data/products.json", JSON.stringify(parsedProducts));
  }

  static getAll() {
    return parsedProducts;
  }

  static getById(id) {
    return parsedProducts.find((p) => p._id === id);
  }

  static deleteById(id) {
    const updatedProducts = parsedProducts.filter((p) => p._id !== id);
    fs.writeFileSync("./data/products.json", JSON.stringify(updatedProducts));
  }
};
