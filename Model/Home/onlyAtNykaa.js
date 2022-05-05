const mongoose = require("mongoose");

const onlyAtNykaa = new mongoose.Schema({
    img: { type: String },
    desc1: { type: String },
    desc2: { type: String },
});

module.exports = mongoose.model("onlyatnykaas", onlyAtNykaa);
