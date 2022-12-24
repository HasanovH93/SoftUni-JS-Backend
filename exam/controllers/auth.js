const { register, login } = require("../services/user");
const { parseError } = require("../util/parser");
const validator = require('validator')

const authController = require("express").Router();

authController.get("/register", (req, res) => {
  //TODO replace with actual view by assignment
  res.render("register", {
    title: "Register",
  });
});

authController.post("/register", async (req, res) => {
  try {
   if(req.body.email.length < 10){
    throw new Error('Email must be at least 10 characters long')
   }
    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields are required!");
    }
    if (req.body.password.length < 4) {
      throw new Error("passwords must be at least 4 characters long");
    }
    if (req.body.password != req.body.repass) {
      throw new Error("Password don't match");
    }
    const token = await register(req.body.email, req.body.username, req.body.password);
    
    //TODO check assignment to see if register created session
    res.cookie("token", token);

    res.redirect("/"); //TODO replace with redirect by assignment
  } catch (error) {
    const errors = parseError(error);
    //TODO add error display to actual template from assignment
    res.render("register", {
      title: "Register Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

authController.get('/login', async (req, res) => {
    res.render('login', {
        title: 'Login'
    })
});


authController.post('/login', async (req, res) => {
    try {
       const token = await login(req.body.email, req.body.password);
       res.cookie('token', token);
       res.redirect('/'); //TODO replace with redirect by assignment

    } catch (error) {
        const errors = parseError(error);
        res.render("login", {
            title: "Login",
            errors,
            body: {
              email:req.body.email,
              username: req.body.username,
            },
          });
    }
})

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
})

module.exports = authController;
