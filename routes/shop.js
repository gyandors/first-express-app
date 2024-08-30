const express = require("express");

const shopController = require("../controllers/shop");
const contactController = require("../controllers/contactUs");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.post("/add-to-cart/:productId", shopController.postCart);

router.get("/contact-us", contactController.getContactUs);

router.post("/contact-us", contactController.postContactUs);

module.exports = router;
