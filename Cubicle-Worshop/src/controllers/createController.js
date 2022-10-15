const router = require("express").Router();
const cubeService = require("../services/createServices");

const renderCreateCubePage =  (req, res) => {
  res.render("create");
};

const createCube = async (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;

  try {
    await cubeService.create(name, description, imageUrl, difficulty);
    res.redirect("/");
    
  } catch (error) {
     res.status(400).json({message: 'Could not create cube!', error})
  }
  
}; 

const getCubeDetails = async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);
  res.render("cube/details", {
    ...cube,
  });
};

router.get("/create", renderCreateCubePage);
router.post("/create", createCube);
router.get("/:cubeId", getCubeDetails);

module.exports = router;
