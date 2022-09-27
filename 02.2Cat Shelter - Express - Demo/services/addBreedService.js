const fs = require("fs");
const db = require("../services/db.json");



function getList() {
  return db.breeds;
}

function getCatsList(){
  return db.cats
}

async function createBreed(breed) {
  db.breeds.push(breed);
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
  createBreed,
  getList,
  getCatsList
};
