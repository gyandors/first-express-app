//Core modules
const path = require("path");

//Third party modules
const express = require("express");
const bodyParser = require("body-parser");

//Custom modules
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contact");
const successPouter = require("./routes/success");

//Main application
const app = express();

//Setting the EJS as template engine
app.set("view engine", "ejs");

//Serving static files like, css files
app.use(express.static(path.join(__dirname, "public")));

//Parsing the form data using body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter.router);

app.use(contactRouter);

app.use(successPouter);

app.use(shopRouter);

//This will execute for not found url's
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Not Found", path:'/404' });
});

app.listen(3000);
