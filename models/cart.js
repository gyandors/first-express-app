const fs = require("fs");

module.exports = class Cart {
  static addItem(id, price) {
    fs.readFile("data/cart.json", (err, data) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(data);
      }

      const existingProduct = cart.products.find((p) => p.id === id);
      if (existingProduct) {
        const index = cart.products.findIndex((p) => p.id === id);
        cart.products[index].quantity += 1;
      } else {
        cart.products.push({ id: id, quantity: 1 });
      }

      cart.totalPrice += price;

      fs.writeFile("data/cart.json", JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  }
};
