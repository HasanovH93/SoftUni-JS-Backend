const { getAllArticles, createArticle } = require("../services/articleService");

const articleController = require("express").Router();

articleController.get("/", async (req, res) => {
  const articles = await getAllArticles();

  res.render("article", {
    title: " - Articles",
    articles,
  });
});

articleController.post('/', async (req, res) => {
      await createArticle(req.body.author,req.body.title,req.body.content)
      res.redirect('/')
});

module.exports = articleController;
