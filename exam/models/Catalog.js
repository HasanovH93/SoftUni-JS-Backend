const { Schema, model, Types } = require("mongoose");

const URL_PATTERN = /^https?:\/\/.+$/i;

const catalogSchema = new Schema({
  title: { type: String, required: true, minlength: [10, "Title must be at least 10 characters long"] },
  charity: { type: String, required: true ,minlength: [2, "Title must be at least 2 characters long"]},
  image: {type:String, required:true, validate: {
    validator: (value) => {
    URL_PATTERN.test(value)
    },
    message: 'Image must be a valid url'
}},
  description: { type: String, required: true,minlength: [10, "Description must be at least 10 characters long"], maxlength: [100, "Description must maximum 100 characters long"] },
  category: { type: String, required: true },
  price: { type: Number, required: true, min :[1, 'Price must be a positive number'] },

  buyingList: { type: [Types.ObjectId], ref: "User", default: [] },
  owner: { type: Types.ObjectId, ref: "User", required: true },
});

const Catalog = model('Catalog', catalogSchema);

module.exports = Catalog


