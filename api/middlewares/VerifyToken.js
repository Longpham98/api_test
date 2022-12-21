const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.header('token');

    if(!token) return res.status(401).send('Access denied!');

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (error) {
        return res.status(400).send('Invalid token!');
    }
}