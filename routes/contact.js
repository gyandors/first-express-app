const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/contact-us", (req, res, next) => {
  res.render("contact-us", { pageTitle: "Contact Us", path: '/contact-us' });
});

module.exports = router;
