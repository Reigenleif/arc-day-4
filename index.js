const express = require("express");
const fs = require("fs");

const books = [];

const app = express();

app.use("/home", (req, res, next) => {
  console.log("Home page");
  res.send("Home Page");
});

app.get("/book", (req, res, next) => {
    res.send(books);
});

app.post("/book", (req, res, next) => {
  const title = req.body
  const author = req.body

  books.push({ title, author });

  res.send(json.stringify(books));
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
