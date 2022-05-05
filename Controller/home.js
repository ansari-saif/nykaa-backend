const featuredBrands = require("../Model/Home/featuredBrands");
const onlyAtNykaa = require("../Model/Home/onlyAtNykaa");
const topBrands = require("../Model/Home/topBrands");
const trendingStores = require("../Model/Home/trendingStores");

const getOnlyAtNykaa = async (req, res, next) => {
    try {
        let response = await onlyAtNykaa.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};
const getTopBrands = async (req, res, next) => {
    try {
        let response = await topBrands.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getfeaturedBrands = async (req, res, next) => {
    try {
        let response = await featuredBrands.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const gettrendingStores = async (req, res, next) => {
    try {
        let response = await trendingStores.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getOnlyAtNykaa,
    getTopBrands,
    getfeaturedBrands,
    gettrendingStores,
};
