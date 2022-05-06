const mongoose = require("mongoose");

const users = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    shippingAddress: {
        type: Object,
        default: {
            name: { type: String },
            email: { type: String },
            number: { type: String },
            pincode: { type: String },
            address: { type: String },
            country: { type: String },
        },
    },
});

module.exports = mongoose.model("users", users);
