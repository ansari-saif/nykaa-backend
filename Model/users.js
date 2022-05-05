const mongoose = require("mongoose");

const users = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    shippingAddress: { type: Object, default: { country: "India" } },
});

module.exports = mongoose.model("users", users);
