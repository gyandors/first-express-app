const Product = require("../models/product");

exports.getAdmin = (req, res, next) => {
  res.render("admin/admin", {
    pageTitle: "Admin",
    products: Product.getAll(),
    path: "/admin",
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/product-form", {
    pageTitle: "Add Product",
    path: "/admin/product-form",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    null,
    req.body.title,
    req.body.quantity,
    req.body.price,
    req.body.image,
    req.body.description
  );
  product.save();
  res.redirect("/admin");
};

exports.getEditProduct = (req, res, next) => {
  const editing = req.query.edit;
  if (!editing) res.redirect("/admin");
  res.render("admin/product-form", {
    pageTitle: "Edit Product",
    path: "/admin/product-form",
    editing: editing,
    product: Product.getById(req.params.productId),
  });
};

exports.postEditProduct = (req, res, next) => {
  const product = new Product(
    req.body.productId,
    req.body.title,
    req.body.quantity,
    req.body.price,
    req.body.image,
    req.body.description
  );
  product.save();
  res.redirect("/admin");
};

exports.getDeleteProduct = (req, res, next) => {
  Product.deleteById(req.params.productId);
  res.redirect("/admin");
};
