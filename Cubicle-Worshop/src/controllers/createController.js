const router = require("express").Router();
const cubeService = require("../services/createServices");

const renderCreateCubePage = (req, res) => {
  let cubes = cubeService.getall();
  console.log(cubes);
  res.render("create");
};

const createCube = (req, res) => {
  const { name, desctiption, imageUrl, difficulty } = req.body;
  cubeService.create(name, desctiption, imageUrl, difficulty);
  res.redirect("/");
};

const getCubeDetails = (req, res) => {
  let cube = cubeService.getOne(req.params.cubeId);
  res.render("details", {
    ...cube,
  });
};

router.get("/create", renderCreateCubePage);
router.post("/create", createCube);
router.get("/cube/:cubeId", getCubeDetails);

module.exports = router;
