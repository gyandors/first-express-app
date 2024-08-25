const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.post("/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
