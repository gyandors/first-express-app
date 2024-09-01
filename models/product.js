const db = require("../utils/database");

module.exports = class Product {
  constructor(title, quantity, price, image, description) {
    this.title = title;
    this.price = +price;
    this.quantity = +quantity;
    this.image = image;
    this.description = description;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, quantity, image, description) VALUES (?, ?, ?, ?, ?)",
      [this.title, this.price, this.quantity, this.image, this.description]
    );
  }

  updateById(id) {
    return db.execute(
      "UPDATE products SET title = ?, price = ?, quantity = ?, image = ?, description = ? WHERE _id = ?",
      [this.title, this.price, this.quantity, this.image, this.description, id]
    );
  }

  static getAll() {
    return db.execute("SELECT * FROM products");
  }

  static getById(id) {
    return db.execute("SELECT * FROM products WHERE _id = ?", [id]);
  }

  static deleteById(id) {
    return db.execute("DELETE FROM products WHERE _id = ?", [id]);
  }
};
