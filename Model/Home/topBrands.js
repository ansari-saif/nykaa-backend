const mongoose = require("mongoose");

const topBrands = new mongoose.Schema({
    img: { type: String },
    desc1: { type: String },
    desc2: { type: String },
});

module.exports = mongoose.model("topbrands", topBrands);
