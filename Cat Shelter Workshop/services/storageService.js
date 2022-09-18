const db = require('../db.json')
const fs = require('fs')


const saveData = (data) => {
    db.cats.push(data)
    let result = JSON.stringify(db, "",2)
   fs.writeFileSync('./db.json',result)
}
const saveBreed= (data) => {
    db.cats.push(data)
    let result = JSON.stringify(db, "",2)
   fs.writeFileSync('./db.json',result)
}
const storageService = {
    saveData,
    
}

module.exports = storageService