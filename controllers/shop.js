const Product = require("../models/product");
const Cart = require("../models/cart");

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

exports.postCart = (req, res, next) => {
  const product = Product.getById(req.body.productId);
  Cart.addItem(product._id, product.price);
  res.redirect("/cart");
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
};
