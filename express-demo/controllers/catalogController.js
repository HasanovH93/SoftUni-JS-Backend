const router = require("express").Router();
const { getList } = require("../services/productService");

router.get("/", (req, res) => {
  const products = getList();
  res.render("catalog", {
    products,
  });
});

router.get("/:productId", (req, res) => {
  res.render("details");
});

module.exports = router;
