const fs = require("fs");
const db = require("../services/db.json");


async function createCat(cat,id) {
  id = "id" + Math.random().toString(16).slice(2)
    db.cats.push({
      
       id,
       cat
       
    });
    await persist();
  }
  
  async function persist() {
    return new Promise((resolve, reject) => {
      fs.writeFile("./services/db.json", JSON.stringify(db, "", 2), (err) => {
        if (err == null) {
          resolve();
        } else {
          reject(err);
        }
      });
    });
  }
  

  module.exports = {
    createCat,
  }