const bcrypt = require('bcrypt')


const users = []

async function register(username,password) {
       if(users.find(u => u.username.toLowerCase() == username.toLowerCase())){
        throw new Error('Username is taken')
       }

       const user = {
        username,
        password: await bcrypt.hash(password,10)
       }
       users.push(user)
}


async function login(username,password) {

}

module.exports = {
    register,
    login,
}