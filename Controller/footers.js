const footersModel = require("../Model/footers");

const getFooters = async (req, res, next) => {
    try {
        let response = await footersModel.find({});
        res.status(200).json(response);
    } catch (error) {
        req.status(500).send(error);
    }
};

module.exports = {
    getFooters,
};
