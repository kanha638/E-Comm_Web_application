const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  img: String,
  descritption: String,
  userId: String,
});
module.exports = mongoose.model("products", productSchema);
