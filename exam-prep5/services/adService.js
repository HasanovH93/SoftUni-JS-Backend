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
  return await Ad.findById(id).populate('author').populate('applied').lean();
}

async function getAll(){
  return await Ad.find({}).lean();
}
async function getLastTree() {
    return await Ad.find().limit(3).lean();
};


async function updateById(id, data) {
  const existing = await Ad.findById(id)
  if (!existing) {
      throw new Error('No such id in database')
  }
  Object.assign(existing, data);
  return existing.save()
};

async function deleteAd(id){
  return await Ad.findByIdAndDelete(id)
}

async function applyAd(id, userId) {
  const currentAd = await Ad.findById(id);
  currentAd.applied.push(userId)
  return await currentAd.save();
};

module.exports = {
  create,
  getLastTree,
  getAll,
  getById,
  deleteAd,
  updateById,
  applyAd
};
