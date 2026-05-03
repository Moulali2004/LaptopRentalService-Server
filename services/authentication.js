const jwt = require('jsonwebtoken');

const secretKey = "Moulali@2004";

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        user: user
    }, secretKey);
}

function getUser(token) {
    try {
        return jwt.verify(token, secretKey);
    } 
    catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
};