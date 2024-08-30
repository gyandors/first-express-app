const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.getAdmin);

router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", (req, res, next) => {
  console.log(req.params.productId);
});

router.delete("/delete-product/:productId", (req, res, next) => {
  console.log(req.params.productId);
});

module.exports = router;
