const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "dasdasdafs324234";

async function register(email,username, password) {
  const existingUsername = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  const existingEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (existingEmail) {
    throw new Error("email is taken");
  }
  if (existingUsername) {
    throw new Error("username is taken");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    username,
    hashedPassword,
  });
  //TODO see assignment if registration creates user session;

  const token = createSession(user);
  return token;
}

async function login(email, password) {
  const user = await User.findOne({email}).collation({
   locale: "en",
   strength: 2,
 });

 if(!user){
   throw new Error('Incorrect email or password');
 }

 const result = await bcrypt.compare(password, user.hashedPassword);

 if(result == false ){
   throw new Error('Incorrect email or password');
 }
 const token = createSession(user);
 return token;
}

function verifyToken(token) {
   return jwt.verify(token, JWT_SECRET)
}

function createSession({ _id, username, email }) {
  const payload = {
    _id,
    email,
    username,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

module.exports = {
  register,
  login,
  verifyToken
};
