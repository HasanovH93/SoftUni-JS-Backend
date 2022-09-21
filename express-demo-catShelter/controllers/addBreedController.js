const router = require("express").Router();

router.get("/cats/add-breed", (req, res) => {
  console.log("GET");
  res.render("addBreed");
});

module.exports = router;
