const { verifyJWToken } = require("../CommonLib/JWToken");

const isValidToken = (req, res, next) => {
    try {
        const token = req.headers.token;
        const response = verifyJWToken(token);
        console.log(response);
        next();
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    isValidToken,
};
