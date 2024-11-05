// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("Access Denied");
    console.log(token);
    try {
        const actualToken= token.split(" ")[1];
        const verified = jwt.verify(actualToken,  process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};

module.exports = authMiddleware;
