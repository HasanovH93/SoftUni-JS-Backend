

const { createHotel, getById } = require("../services/hotel");
const { parseError } = require("../util/parser");

const hotelController = require("express").Router();

hotelController.get("/:id/details", async (req, res) => {
    const hotel = await getById(req.params.id)
  res.render("details", {
    title: "Hotel details",
    hotel
  });
});

hotelController.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Hotel",
  });
});

hotelController.post("/create", async (req, res) => {
  const hotel = {
    name: req.body.name,
    city: req.body.city,
    rooms: Number(req.body.rooms),
    imageUrl: req.body.imageUrl,
    owner: req.user._id,
  };


  try {
    if(Object.values(hotel).some(v => !v)){
        throw new Error('all fields are required')
      }
    
    await createHotel(hotel);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      title: "Create Page",
      body: hotel,
      errors: parseError(error),
    });
  }
});

hotelController.get("/:id/edit", (req, res) => {
  res.render("edit", {
    title: "edit hotel",
  });
});

module.exports = hotelController;
