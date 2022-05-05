const userModel = require("../Model/users");

const createUser = async (req, res, next) => {
    try {
        let userDetails = req.body;
        // console.log(userDetails);
        let response = await userModel.insertMany([userDetails]);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createUser,
};
