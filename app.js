const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);

app.use(shopRouter);

//This will execute for not found url's
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
