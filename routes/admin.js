const path = require("path");
const fs = require("fs");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = fs.readFileSync("./assets/products.json");
const parsedProducts = JSON.parse(products);

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product",path: '/admin/add-product' });
});

// admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  parsedProducts.push({ title: req.body.title, quantity: req.body.quantity });
  fs.writeFileSync("./assets/products.json", JSON.stringify(parsedProducts));
  res.redirect("/");
});

module.exports.router = router;
module.exports.products = parsedProducts;
