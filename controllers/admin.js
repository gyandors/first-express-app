const Product = require("../models/product");

exports.getAdmin = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/admin", {
        pageTitle: "Admin",
        products: products,
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
  Product.create({
    title: req.body.title,
    price: req.body.price,
    quantity: req.body.quantity,
    image: req.body.image,
    description: req.body.description,
  })
    .then(() => res.redirect("/admin"))
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editing = req.query.edit;
  if (editing !== "true") res.redirect("/admin");

  Product.findByPk(req.params.productId)
    .then((product) => {
      res.render("admin/product-form", {
        pageTitle: "Edit Product",
        path: "/admin/product-form",
        editing: editing,
        product: product.dataValues,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/admin");
    });
};

exports.postEditProduct = (req, res, next) => {
  Product.update(
    {
      title: req.body.title,
      price: req.body.price,
      quantity: req.body.quantity,
      image: req.body.image,
      description: req.body.description,
    },
    {
      where: { _id: req.body.productId },
    }
  )
    .then(() => res.redirect("/admin"))
    .catch((err) => console.log(err));
};

exports.getDeleteProduct = (req, res, next) => {
  Product.destroy({ where: { _id: req.params.productId } })
    .then(() => res.redirect("/admin"))
    .catch((err) => console.log(err));
};
