const mongoose = require("mongoose");

const footers = new mongoose.Schema({
    name: { type: String },
    text: { type: String },
});

module.exports = mongoose.model("footers", footers);
