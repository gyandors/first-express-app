const Product = require("../models/product");

exports.getAdmin = (req, res, next) => {
  res.render("admin/admin", {
    pageTitle: "Admin",
    products: Product.getAll(),
    path: "/admin",
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.quantity,
    req.body.price,
    req.body.image,
    req.body.description
  );
  product.save();
  res.redirect("/admin");
};
