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

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter.router);

app.use(contactRouter);

app.use(successPouter);

app.use(shopRouter);

//This will execute for not found url's
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
