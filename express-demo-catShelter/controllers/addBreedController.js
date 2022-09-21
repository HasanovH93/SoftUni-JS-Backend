const { create, getList } = require("../services/addBreedService");

const router = require("express").Router();


router.get("/cats/add-breed", (req, res) => {
  res.render("addBreed");
});

router.post('/cats/add-breed', async (req,res) => {
 await create(req.body)
  res.redirect('/')

});

module.exports = router;
