const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.post("/success", (req, res, next) => {
  res.render("success", { pageTitle: "Success", path:'/contact-us' });
});

module.exports = router;
