const Item = require("../models/Item");


async function getAll(){
   return Item.find({});

}


async function getById(id){
  return Item.findById(id);
}

async function create(item){
  return Item.create(item);

}
async function edit(id,item){

}


async function deleteByID(id){
   return Item.deleteByID(id);
}

module.exports = {
    getAll,
    getById,
    create,
    edit,
    deleteByID
}