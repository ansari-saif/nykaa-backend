const mongoose = require("mongoose");

const cartproducts = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
    card_title: { type: String },
    title: { type: String },
    rating: { type: String },
    ratingNum: { type: String },
    reviews: { type: String },
    price: { type: String },
    off_price: { type: String },
    offer: { type: String },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    brand: { type: String },
    category: { type: String },
    sub_category: { type: String },
    description: { type: String },
    how_to_use: { type: String },
    id: { type: Number },
    quan: { type: Number },
});

module.exports = mongoose.model("cartproducts", cartproducts);
