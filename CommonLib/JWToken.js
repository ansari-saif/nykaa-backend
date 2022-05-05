const jwt = require("jsonwebtoken");

const SECRET_KEY = "My_Sceret_Key";

const generateJWToken = (payload) => {
    let token = jwt.sign(payload, SECRET_KEY);
    return token;
};

const verifyJWToken = (token) => {
    let data = jwt.verify(token, SECRET_KEY);
    return data;
};

module.exports = {
    generateJWToken,
    verifyJWToken,
};
