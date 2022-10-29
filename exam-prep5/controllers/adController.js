const { hasUser } = require("../middlewares/guards");
const { create, getAll, getById } = require("../services/adService");
const { parseError } = require("../util/parser");

const adController = require("express").Router();

adController.get("/create", hasUser(), (req, res) => {
  res.render("create");
});

adController.post("/create", hasUser(), async (req, res) => {

  try {
    // const adOffer = {
    //     headline: req.body.headline,
    //     location: req.body.location,
    //     name: req.body.name,
    //     description: req.body.description,
    //     author
    //   };
    const adOffer = req.body
    adOffer.author = req.user

    if (Object.values(adOffer).some((v) => !v)) {
      throw new Error("All fields are required!");
    }
    await create(adOffer);
    res.redirect("/");
  } catch (err) {
    res.render("create", {
      title: "Create",
      errors: parseError(err),
    });
  }
});

adController.get("/ads", async (req, res) => {
  const data = await getAll();
  res.render("all-ads", {
    data,
  });
});

adController.get("/details/:id/", async (req, res) => {
  const id = req.params.id;
  const data = await getById(id);
 console.log(data.author.email)
  data.candidates = data.applied.length;
  if (req.user) {
    data.isUser = true;
    data.isApply = data.applied.find((b) => b._id == author._id.toString()) != undefined;
    if (data.author._id.toString() == req.user._id) {
      data.isOwner = true;
    } else {
      data.isOwner = false;
    }
  } else {
    data.isUser = false;
  }
  res.render("details", {
    data,
  });
});

module.exports = adController;
