const db = require('../db.json')
const fs = require('fs')


const saveData = (data,file) => {
   
   db.cats.push(data) 
   let result = JSON.stringify(db, "",2)
   fs.writeFileSync('./db.json',result)
}
const saveBreed= (breedData) => {
    db.breeds.push(breedData)
    let resultBreed = JSON.stringify(db, "",2)
    fs.writeFileSync('./db.json',resultBreed)
}



const storageService = {
    saveData,
    saveBreed,
   
    
}

module.exports = storageService