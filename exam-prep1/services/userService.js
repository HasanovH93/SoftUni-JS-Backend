const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = "hfsdfsdfsrwq32gdfgdhg";

async function register(username, password) {
  const existing = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });

  if (existing) {
    throw new Error("Username is taken");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    hashedPassword,
  });
  // TODO see assignment if registration creates user session
  const token = createSession(user)

  return token
}

async function login() {}

function verifyToken() {}

function createSession(_id,username) {
    const playload = {
     _id,
     username,
    }
    const token = jwt.sign(playload,JWT_SECRET);
    return token
}

module.exports = {
  register,
  login,
  verifyToken,
};
