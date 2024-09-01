const Product = require("../models/product");

exports.getAdmin = (req, res, next) => {
  Product.getAll()
    .then(([results, fields]) => {
      res.render("admin/admin", {
        pageTitle: "Admin",
        products: results,
        path: "/admin",
      });
    })
    .catch((err) => console.log(err));
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
    req.body.title,
    req.body.quantity,
    req.body.price,
    req.body.image,
    req.body.description
  );
  product
    .save()
    .then(() => res.redirect("/admin"))
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editing = req.query.edit;
  if (!editing) res.redirect("/admin");

  Product.getById(req.params.productId)
    .then(([results, fields]) => {
      res.render("admin/product-form", {
        pageTitle: "Edit Product",
        path: "/admin/product-form",
        editing: editing,
        product: results[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.quantity,
    req.body.price,
    req.body.image,
    req.body.description
  );
  product
    .updateById(req.body.productId)
    .then(() => res.redirect("/admin"))
    .catch((err) => console.log(err));
};

exports.getDeleteProduct = (req, res, next) => {
  Product.deleteById(req.params.productId)
    .then(() => res.redirect("/admin"))
    .catch((err) => console.log(err));
};
