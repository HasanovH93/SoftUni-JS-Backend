const { response } = require("express");

function hasUser() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      response.redirect("/auth/login");
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user) {
      res.redirect("/"); //TODO check assignment for correct redirect
    } else {
      next();
    }
  };
}

module.exports = {
    hasUser,
    isGuest
};
