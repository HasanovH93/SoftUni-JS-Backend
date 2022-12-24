const Blog = require("../models/Blog");

async function getAll() {
  return await Blog.find({}).lean();
}

async function getById(id) {
  return await Blog.findById(id).populate('owner').populate('followList').lean()
}
async function create(data) {
  return await Blog.create(data);
}

async function followBlog(blogId, userId){
  const blog = await Blog.findById(blogId);

  blog.followList.push(userId);
  await blog.save();
}
async function getLastTree() {
  return await Blog.find().limit(3).lean();
}

module.exports = {
  create,
  getLastTree,
  getAll,
  getById,
  followBlog
};
