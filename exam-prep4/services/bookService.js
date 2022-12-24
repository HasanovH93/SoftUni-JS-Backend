const Book = require('../models/Book');

async function getAll() {
    return Book.find({}).lean();
  }
  
  async function getById(id) {
    return Book.findById(id).lean();
  }

  
  
  async function create(book) {
    return await Book.create(book);
  }

  async function deleteById(id) {
    await Book.findByIdAndDelete(id);
  }

  module.exports = {
    getAll,
    getById,
    create,
    deleteById
  }