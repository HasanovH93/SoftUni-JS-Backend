const fs = require("fs");
const db = require("../services/db.json");


async function createCat(name,description,upload) {
    db.cats.push({
       name,
       description,
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