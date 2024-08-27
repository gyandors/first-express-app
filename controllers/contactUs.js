exports.getContactUs = (req, res, next) => {
  res.render("contact-us", { pageTitle: "Contact Us", path: "/contact-us" });
};

exports.postContactUs = (req, res, next) => {
  res.render("success", { pageTitle: "Success", path: "/contact-us" });
};
