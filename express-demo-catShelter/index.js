const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
  res.write(`
  <h1>Home</h1>
  <ul>
  <li><a href="/addBreed">Add Breed</li>
  <li><a href="/addCat">Add Cat</li>
  </ul>
  `);
  res.end();
});

app.get("/addBreed", (req, res) => {
  res.header({
    "Content-Type": "text/html",
  });
  res.write("<h1>Add Breed</h1>");
  res.end();
});

app.get("/addCat", (req, res) => {
  res.header({
    "Content-Type": "text/html",
  });
  res.write("<h1>Add Cat</h1>");
  res.end();
});

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
