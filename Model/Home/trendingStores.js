const mongoose = require("mongoose");

const trendingStores = new mongoose.Schema({
    img: { type: String },
});

module.exports = mongoose.model("trendingstores", trendingStores);
