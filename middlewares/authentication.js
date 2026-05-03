const { getUser } = require('../services/authentication');

function authenticationRequired(req, res, next) {
    const token = req.cookies.uid;
    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    const user = getUser(token);
    if (!user) {
        return res.status(401).json({ message: 'Invalid token' });
    }   

    req.user = user;
    next();
}