const catalogController = require('express').Router();
const { parseError } = require("../util/parser");
const { create, getAll, getById, deleteById } = require("../services/bookService");



catalogController.get('/:id/details', async (req, res) => {
  // try {
  //   const id = req.params.id;
  //   const book = await getById(id)
  
  //    if (book.owner == req.user._id) {
  //         book.isOwner = true;
         
  //     }else if(book.wishinglist.map(b => b.toString()).includes(req.user._id.toString())) {
  //         book.isWished = true
      
  //     }
  
  //   const bookId = book._id
  //   res.render('details', {
  //       title: "Details Page",
  //       book,
  //       bookId
  //   })
  //  } catch (error) {
  //   const errors = parseError(error);
  //   console.log(errors);
  //   res.render('details',{errors})
  //  }

  const id = req.params.id;
  const book = await getById(id)
  const bookId = book._id
  res.render('details', {
          title: "Details Page",
          book,
          bookId
      })

})
 


  
     
catalogController.get('/catalog', async (req,res) => {
    const books = await getAll()

    res.render('catalog', {
        title:'Home Page',
        books
    })
});




catalogController.get("/:id/delete", async (req, res) => {
    console.log("GET")
    const book = await getById(req.params.id);
    if (book.owner != req.user._id) {
      return res.redirect("/auth/login");
    }
    await deleteById(req.params.id)
    res.redirect("/");
  });

catalogController.get('/create', async (req, res) => {
   
        res.render("create", {
          title: "Create Page",
        });
});

catalogController.post('/create', async (req, res) => {
console.log("POST")
    const book = {
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        book: req.body.image,
        genre: req.body.genre,
        review: req.body.review,
        stars: req.body.stars,
        owner: req.user._id,
    };

    try {
        if (Object.values(book).some((v) => !v)) {
          throw new Error("All fields are required!");
        }
        await create(book);
        res.redirect("/");
      } catch (err) {
        res.render("create", {
          title: "Create",
          body: book,
          errors: parseError(err),
        });
      }
});




module.exports = catalogController;