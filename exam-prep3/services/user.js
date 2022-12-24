const bcrypt = require('bcrypt')
const User = require('../models/User');

async function register(username,password){
  const existing = await getUserByUsername(username);

  if(existing){
    throw new Error('Username is taken')
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    hashedPassword
  })
}

async function login(username,password){

}

async function getUserByUsername(username){
    const user = User.find({ username });

    return user;
}

module.exports = {
    register,
    login
}