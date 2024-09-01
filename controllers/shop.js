const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.getAll()
    .then(([results, fields]) => {
      res.render("index", {
        pageTitle: "Shop",
        products: results,
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.getAll()
    .then(([results, fields]) => {
      res.render("shop/products", {
        pageTitle: "Products",
        products: results,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res, next) => {
  Product.getById(req.params.productId)
    .then(([results, fields]) => {
      if (!results[0]) {
        res.redirect("/products");
      } else {
        res.render("shop/product-details", {
          pageTitle: "Product Details",
          product: results[0],
          path: "/products",
        });
      }
    })
    .catch((err) => console.log(err));
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
