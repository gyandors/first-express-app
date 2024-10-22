//Core modules
const path = require("path");

//Third party modules
const express = require("express");
const bodyParser = require("body-parser");

//Custom modules
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const sequelize = require("./utils/database");

//Main application
const app = express();

//Setting the EJS as template engine
app.set("view engine", "ejs");

//Serving static files like, css files
app.use(express.static(path.join(__dirname, "public")));

//Parsing the form data using body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Routers
app.use("/", shopRouter);
app.use("/admin", adminRouter);

//This will execute for not found URL's
const errorController = require("./controllers/error");
app.use(errorController.notFound);

sequelize
  .sync()
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
