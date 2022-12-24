const { create, getAll, getById, followBlog } = require("../services/blogService");
const { parseError } = require("../util/parser");

const blogController = require("express").Router();

blogController.get("/blogs", async (req, res) => {
  try {
    const data = await getAll();
    res.render("blog", { data });
  } catch (err) {
    const errors = parseError(err);
    res.render("blog", { errors });
  }
});

blogController.get("/details/:id", async (req, res) => {
  const id = req.params.id
  console.log(id)
  const data = await getById(id);
   
  if (req.user) {
    if (data.owner._id == req.user._id) {
      data.isOwner = true;
    } else if (data.followList) {
      if (
        data.followList
          .map((f => f._id.toString()))
          .includes(req.user._id.toString())
      ) {
       data.isFollowed = true;
      }
      data.followers = data.followList.map(f => f.email).join(", ");
    }

    data.isUser = true;
  } else {
    data.isUser = false;
  }

  console.log(data);
  res.render("details", {
    data,
  });
});

blogController.get('/:id/follow', async (req, res) => {
  const blog = await getById(req.params.id);

  try {
    if(blog.owner._id == req.user._id){
      blog.isOwner = true;
      throw new Error('Cannot follow your blog')
    }
    if (blog.followList.map((f => f._id.toString())).includes(req.user._id.toString())){
      throw new Error('Cannot follow blog twice')
    }
    await followBlog(req.params.id, req.user._id);
    res.redirect(`/${req.params.id}/details`)
  } catch (error) {
     res.render('details', {
      blog: Object.assign(blog, {owner: blog.owner.email}),
      errors: parseError(error)
     })
  }
})

blogController.get("/create", async (req, res) => {
  res.render("create");
});

blogController.post("/create", async (req, res) => {
  const data = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    category: req.body.category,
    owner: req.user._id,
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
});

module.exports = blogController;
