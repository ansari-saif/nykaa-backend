const cartproducts = require("../Model/cartproducts");

const addToCart = async (req, res, next) => {
    try {
        let product = req.body;
        // console.log(userDetails);
        let response = await cartproducts.insertMany([product]);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getFromCart = async (req, res, next) => {
    try {
        let id = req.body.id;

        let response = await cartproducts.find({ userId: id });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateCart = async (req, res, next) => {
    try {
        let uid = req.body.uid;
        let pid = req.body.pid;
        let num = req.body.num;

        let response = await cartproducts.updateOne(
            { $and: [{ _id: pid }, { userId: uid }] },
            { $set: { quan: num } }
        );

        res.status(202).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteFromCart = async (req, res, next) => {
    try {
        let uid = req.body.uid;
        let pid = req.body.pid;

        let response = await cartproducts.deleteOne({
            $and: [{ _id: pid }, { userId: uid }],
        });

        res.status(202).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const emptyCart = async (req, res, next) => {
    try {
        let id = req.body.id;

        let response = await cartproducts.deleteMany({ userId: id });
        res.status(202).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    addToCart,
    getFromCart,
    updateCart,
    deleteFromCart,
    emptyCart,
};
