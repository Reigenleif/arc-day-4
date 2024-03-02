const express = require("express");
const bodyParser = require("body-parser");

const books = [];

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/home", (req, res, next) => {
  console.log("Home page");
  res.send("Home Page");
});

app.get("/book", (req, res, next) => {
  res.send(books);
});

app.post("/book", (req, res, next) => {
  const id = books.length + 1;
  const title = req.body.title;
  const author = req.body.author;
  console.log(req.body);

  books.push({ title, author });

  res.send({
    id,
    title,
    author,
  });
});

app.get("/book/:id", (req, res, next) => {
  const id = req.params.id;
  res.send(books[id]);
});

app.put("/book/:id", (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    
    books[id] = { title, author };
    res.send(books[id]);
    }
);

app.delete("/book/:id", (req, res, next) => {
    const id = req.params.id;
    books.splice(id, 1);
    res.send(books);
    }
);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
