const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title, req.body.quantity);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    products: Product.getAll(),
    path: "/",
  });
};
