const Catalog = require("../models/Catalog");

async function getAll() {
    return Catalog.find({}).lean();
}

async function getById(id) {
    return Catalog.findById(id).lean()
}

async function createCharity(charity) {
  return await Catalog.create(charity);
}

async function update(id, hotel) {
    const existing = await Catalog.findById(id);

    existing.title = hotel.title
    existing.charity = hotel.charity
    existing.description = hotel.description
    existing.category = hotel.category
    existing.price = hotel.price

    await existing.save();
}

async function deleteById(id) {
    await Catalog.findByIdAndRemove(id)
}

async function buyCharity(charityId, userId) {

   const charity =  await Catalog.findById(charityId);
  
   charity.buyingList.push(userId.toString());
   console.log(charity)
   await charity.save()
}


async function getSearch(query) {
        const data = await Catalog.find(query);
        return data;
    

}


module.exports = {
  getAll,
  getById,
  createCharity,
  update,
  deleteById,
  buyCharity,
  getSearch
};
