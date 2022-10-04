const bcrypt = require('bcrypt')

const hashedPass = bcrypt.hashSync('123456',11);
console.log(hashedPass);

const result = bcrypt.compareSync('123456', '$2b$11$D5um0PSNz7rsu3vvJXMPTOwWDZLmr2ttCyVzS924p.SvojZ8gHNoK');

console.log(result)