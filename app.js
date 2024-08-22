const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"> <input type="text" name="title" placeholder="Enter name" /> <input type="number" name="quantity" placeholder="Enter quantity" /> <button type="submit">Add Product</button> </form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log("In product domain", req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello welcome to Express Js</h1>");
});

app.listen(3000);
