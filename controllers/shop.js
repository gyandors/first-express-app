const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  res.render("index", {
    pageTitle: "Shop",
    products: Product.getAll(),
    path: "/",
  });
};

exports.getProducts = (req, res, next) => {
  res.render("shop/products", {
    pageTitle: "Products",
    products: Product.getAll(),
    path: "/products",
  });
};

exports.getProduct = (req, res, next) => {
  res.render("shop/product-details", {
    pageTitle: "Product Details",
    product: Product.getById(req.params.productId),
    path: "/products",
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};

exports.postCart = (req, res, next) => {
  const productId = req.params.productId;
  const products = Product.getAll();
  const p = products.find((p) => p._id === productId);
  res.redirect("/cart");
};
