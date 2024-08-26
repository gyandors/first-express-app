const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminData.products)
  res.render("shop", { pageTitle: "Shop", products: adminData.products, path: '/' });
});

module.exports = router;
