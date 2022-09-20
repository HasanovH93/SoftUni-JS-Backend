const router = require("express").Router();
const { create } = require("../services/productService");

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res, next) => {
  console.log("Handling Post");
  console.log(req.body);

  try {
    await create(req.body.name, Number(req.body.price));
  } catch (err) {
    next(err);
  }

  res.redirect("/catalog");
});

module.exports = router;
