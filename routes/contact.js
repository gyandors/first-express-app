const express = require("express");

const contactController = require("../controllers/contactUs");

const router = express.Router();

router.get("/contact-us", contactController.getContactUs);

router.post("/contact-us", contactController.postContactUs);

module.exports = router;
