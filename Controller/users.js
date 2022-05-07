const userModel = require("../Model/users");

const createUser = async (req, res, next) => {
    try {
        let userDetails = req.body;
        let response = await userModel.insertMany([userDetails]);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        let id = req.body.id;
        let data = req.body.Data;
        let response = await userModel.updateMany(
            { _id: id },
            {
                $set: {
                    name: data.name,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    password: data.password,
                },
            }
        );
        res.status(202).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createUser,
    updateUser,
};
