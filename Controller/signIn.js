// const { generateJWToken } = require("../CommonLib/JWToken");
const users = require("../Model/users");

// const signIn = (req, res, next) => {
//     console.log(req.body);

//     let userDetails = {
//         name: req.body.name,
//         phoneNumber: req.body.phoneNumber,
//         email: req.body.email,
//         shippingAddress: req.body.shippingAddress,
//     };

//     const JWToken = generateJWToken(userDetails);
//     res.status(201).json({
//         status: "success",
//         token: JWToken,
//     });
// };

const signIn = async (req, res, next) => {
    try {
        let id1 = { email: req.body.id };
        let id2 = { phoneNumber: req.body.id };
        let response = await users.find({ $or: [id1, id2] });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    signIn,
};
