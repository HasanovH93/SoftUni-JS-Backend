const cookieParser = require('cookie-parser');
const { body, validationResult, cookie } = require('express-validator');
const { isGuest } = require('../middlewares/guards');
const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");

const authController = require("express").Router();

authController.get("/register", isGuest(), (req, res) => {
  //TODO replace with actual view by assignment
  res.render("register", {
    title: "Register page",
  });
});

authController.post("/register",  isGuest(),
body('username')
.isLength({min: 5}).withMessage('Username must be at least 5 characters long')
.isAlphanumeric().withMessage('Username may contain only letters and numbers'),
body('password')
.isLength({min: 5}).withMessage('Password must be at least 5 characters long')
.isAlphanumeric().withMessage('Password may contain olny letters and numbers'),
async (req, res) => {
  try {
    const { errors } = validationResult(req);
    if(errors.length > 0 ){
      throw errors;
    }
    if (req.body.password != req.body.repass) {
      throw new Error("passwords dont match");
    }
    const token = await register(req.body.username, req.body.password);

    //TODO check assignment to see if register creates session
    res.cookie("token", token);
    res.redirect("/"); //TODO replace with redirect by assignment
  } catch (error) {
    //TODO add error parser
    const errors = parseError(error);
    //TODO add error display to actual template from assingment
    res.render("register", {
      title: "Registration Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});
authController.get("/login",  isGuest(), (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

authController.post("/login",  isGuest(), async (req, res) => {
  try {
   const token =  await login(req.body.username, req.body.password);
   //TODO replace with redirect by assignment
   res.cookie('token',token);
   res.redirect('/')
  } catch (error) {
    const errors = parseError(error);
    res.render("login", {
      title: "Login Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

authController.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/')
})

module.exports = authController;
