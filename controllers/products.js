const fs = require("fs");

const products = fs.readFileSync("assets/products.json");
const parsedProducts = JSON.parse(products);

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  parsedProducts.push({ title: req.body.title, quantity: req.body.quantity });
  fs.writeFileSync("./assets/products.json", JSON.stringify(parsedProducts));
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    products: parsedProducts,
    path: "/",
  });
};
