const asyncHandler = require("express-async-handler");
const User = require('../moudel/userModule');

module.exports = asyncHandler( (req, res, next) => {
    const role = req.headers.role;
    if (req.user &&  role === 'admin') {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }})
