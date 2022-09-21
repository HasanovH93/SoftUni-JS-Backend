const { createBreed } = require("../services/addBreedService");

const router = require("express").Router();


router.get("/cats/add-breed", (req, res) => {
  res.render("addBreed");
});

router.post('/cats/add-breed', async (req,res) => {
  console.log(req.body)
 await createBreed(req.body)
  res.redirect('/')

});

module.exports = router;
