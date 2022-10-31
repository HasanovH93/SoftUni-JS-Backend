const Blog = require("../models/Blog");

async function getAll() {
  return await Blog.find({}).lean();
}

async function getById(id) {
  return await Blog.findOne({_id: id}).lean()
}
async function create(data) {
  return await Blog.create(data);
}

async function getLastTree() {
  return await Blog.find().limit(3).lean();
}

module.exports = {
  create,
  getLastTree,
  getAll,
  getById,
};
