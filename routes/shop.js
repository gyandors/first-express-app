const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Hello welcome to Express Js shop</h1>");
});

module.exports = router;
