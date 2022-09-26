const articleController = require("express").Router();

articleController.get("/", (req, res) => {
  res.render("article", {
    title: ' - Articles',
    articles: [
      {
        author: "John",
        title: "Eh",
        content: "Static Article 1",
      },
      {
        author: "Jack",
        title: "Woow",
        content: "Static Article 2",
      },
    ]
  });
});

module.exports = articleController;
