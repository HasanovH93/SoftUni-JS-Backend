const { hasUser, isGuest } = require("../middlewares/guards");
const {
  createCharity,
  getAll,
  getById,
  update,
  deleteById,
  buyCharity,
  getSearch,
} = require("../services/catalog");
const { parseError } = require("../util/parser");

const catalogController = require("express").Router();

catalogController.get("/create", (req, res) => {
  res.render("create", {
    title: "Create Hotel",
  });
});

catalogController.post("/create", async (req, res) => {
  const charity = {
    title: req.body.title,
    charity: req.body.charity,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    price: Number(req.body.price),
    owner: req.user._id,
  };

  try {
    if (Object.values(charity).some((v) => !v)) {
      throw new Error("all fields are required");
    }

    await createCharity(charity);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      title: "Create Page",
      body: charity,
      errors: parseError(error),
    });
  }
});

catalogController.get("/charities", async (req, res) => {
  const charities = await getAll();
  res.render("catalog", {
    title: "Catalog",
    charities,
  });
});

catalogController.get("/:id/details", async (req, res) => {
  const charity = await getById(req.params.id);
  
if(!req.user){
    charity.isGuest = true
}else if (charity.owner == req.user._id) {
    charity.isOwner = true;
  }else if(charity.buyingList.map(id => id.toString()).includes(req.user._id)){
    charity.isBought = true;
  }
  res.render("details", {
    title: "Charity Details",
    charity,
  });
});

catalogController.get("/:id/edit", hasUser(), async (req, res) => {
  const charity = await getById(req.params.id);

  if (charity.owner != req.user._id) {
    return redirect("/auth/login");
  }

  res.render("edit", {
    title: "Edit Page",
    charity,
  });
});

catalogController.post("/:id/edit", hasUser(), async (req, res) => {
  const charity = await getById(req.params.id);

  if (charity.owner != req.user._id) {
    return redirect("/auth/login");
  }
  const edited = {
    title: req.body.title,
    charity: req.body.charity,
    description: req.body.description,
    category: req.body.category,
    price: Number(req.body.price),
  };

  try {
    await update(req.params.id, edited);
    res.redirect(`/catalog/${req.params.id}/details`);
  } catch (error) {
    res.render("edit", {
      title: "Edit Page",
      body: Object.assign(edited, { _id: req.params.id }),

      errors: parseError(error),
    });
  }
});

catalogController.get("/:id/delete", async (req, res) => {
  const charity = await getById(req.params.id);

  if (charity.owner != req.user._id) {

    return redirect("/auth/login");
  }

  await deleteById(req.params.id);
  res.redirect("/catalog/charities");
});

catalogController.get("/:id/buy", hasUser(), async (req, res) => {
  const charity = await getById(req.params.id);
  try {
    if (charity.owner == req.user._id) {
        charity.isOwner = true
      throw new Error('Cannot Buy your own charity!')
    }

    await buyCharity(req.params.id, req.user._id);
    res.redirect(`/catalog/${req.params.id}/details`);
  } catch (error) {
    res.render('details', {
        title: 'Details Page',
        charity,
        errors: parseError(error)
    })
  }
});


catalogController.get('/search', hasUser(), async (req, res) => {
    res.render('search', {
        title:'Search Page'
    })
})


catalogController.post('/search', hasUser(), async (req, res) => {
    try {
     const query = Object.entries(req.body).reduce((accObj, [key,value]) => {
        if(value !== undefined && value !== null){
          
        }else {
            accObj[key] = value
        }
        return accObj
     }, {})

     const data = await getSearch(query);
     const allData = [];
     data.forEach(element => {
        allData.push(element)
        
     });
     console.log(allData)
     res.render('search', {allData})
      
      
    }catch(error){
     const errors = parseError(error);
     res.render('search', {errors})
    }
});

module.exports = catalogController;
