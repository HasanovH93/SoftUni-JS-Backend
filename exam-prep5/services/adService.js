const Ad = require("../models/Ad");
const User = require("../models/User");

async function create(data) {
 const ad = new Ad(data);
 await ad.save();

 const user = await User.findById(ad.author._id);
 user.ads.push(ad);
 user.save();
}

async function getById(id){
  return await Ad.findById(id).lean()
}

async function getAll(){
  return await Ad.find({}).lean();
}
async function getLastTree() {
    return await Ad.find().limit(3).lean();
};

module.exports = {
  create,
  getLastTree,
  getAll,
  getById
};
