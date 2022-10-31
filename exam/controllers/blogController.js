const { create, getAll, getById } = require("../services/blogService");
const { parseError } = require("../util/parser");


const blogController = require("express").Router();


blogController.get('/blogs', async(req, res) => {
    try {
        const data = await getAll();
        res.render('blog', {data})
    } catch (err) {
        const errors = parseError(err)
        res.render('blog', { errors });
    }
});

blogController.get('/:id/details', async (req, res) => {

    const id = req.params.id
    const data = await getById(id);
    

    console.log(data)
    res.render('details',{
        data
    })
    
})



blogController.get("/create", async (req, res) => {
    res.render('create');
})

blogController.post('/create', async(req, res) => {
    
    const data = {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        category: req.body.category,
        followList: { type: [Types.ObjectId], ref: "User", default: [] },
        owner: { type: Types.ObjectId, ref: "User", required: true },
      };



      try {
        if (Object.values(data).some((v) => !v)) {
          throw new Error("All fields are required!");
        }
        await create(data);
        res.redirect("/");
      } catch (err) {
        res.render("create", {
          title: "Create",
          data,
          errors: parseError(err),
        });
      }
    
})


module.exports = blogController;