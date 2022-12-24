const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  book: { type: String, required: true },
  review: { type: String, required: true },
  genre: { type: String, required: true },
  stars: {
    type: Number,
    required: true,
    min: [1, "Stars must be between 1 and 5"],
    max: [5, "Stars must be between 1 and 5"],
  },
  wishinglist: { type: [Types.ObjectId], ref: "User", default: [] },
  owner: { type: Types.ObjectId, ref: "User" },
});

const Book = model("Book", bookSchema);

module.exports = Book;
