const { hasUser } = require("../middlewares/guards");
const { create, getAll, getById, deleteAd,updateById, applyAd} = require("../services/adService");
const { parseError } = require("../util/parser");

const adController = require("express").Router();

adController.get("/create", hasUser(), (req, res) => {
  res.render("create");
});

adController.post("/create", hasUser(), async (req, res) => {
  try {
    const adOffer = {
      headline: req.body.headline,
      location: req.body.location,
      name: req.body.name,
      description: req.body.description,
      author: req.user,
    };

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
  console.log(data)
  data.candidates = data.applied.length;
  if (req.user) {
    data.isUser = true;
    data.isApply =
      data.applied.find((b) => b._id == req.user._id) != undefined;
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

adController.get("/edit/:id/", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getById(id);
    res.render("edit", {
      data,
    });
  } catch (err) {
    res.render("edit", {
      title: "edit page",
      errors: parseError(err),
    });
  }
});

adController.post("/edit/:id/", async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id

        await updateById(id, data)
        res.redirect(`/ad/details/${id}`)
    } catch (err) {
        const errors = parseError(err)
        res.render("edit", { errors, data: {_id: req.params.id, headline: req.body.headline, location: req.body.location, name: req.body.name, description: req.body.description}});
    }
})

adController.get("/delete/:id", async (req, res) => {
  console.log("GET");
  try {
    await deleteAd(req.params.id);
    res.redirect("/ad/ads");
  } catch (err) {
    console.log(err);
    throw new Error("Error in database! Please try again");
  }
});

adController.get('/apply/:id', hasUser(), async (req, res) => {
    try {
        const id = req.params.id
        const userId =  req.user._id
        await applyAd(id,userId)
        res.redirect(`/`)
    } catch (err) {
        const id = req.params.id
        const errors = parseError(err)
        console.log(errors)
        res.redirect(`/ad/details/${id}`);
    }
})

adController.get('/search', (req, res) => {
    res.render('search')
})

module.exports = adController;
