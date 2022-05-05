const productModel = require("../Model/products");

const getProducts = async (req, res, next) => {
    try {
        let response = await productModel.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getProducts,
};
