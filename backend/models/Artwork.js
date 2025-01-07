const mongoose = require("mongoose");

const artWorkSchema = new mongoose.Schema({
  title: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("ArtWork", artWorkSchema);
