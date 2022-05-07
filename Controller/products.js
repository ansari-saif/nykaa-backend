const productModel = require("../Model/products");

const getProducts = async (req, res, next) => {
    try {
        let limit = 10;
        let skip = 10 * (req.body.limit - 1);
        let response = await productModel.find({}).skip(skip).limit(limit);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getProducts,
};
