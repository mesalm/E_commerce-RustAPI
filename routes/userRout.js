const express = require('express');
const routes = express.Router()
const valedaitToken = require('../middleware/valedatToken')
const {
    registeUser,
    login,
    currentUser
} = require('../controllrs/userController');

routes.route('/regist').post(registeUser)
routes.route('/login').post(login)
routes.route('/current').get( valedaitToken,currentUser)
module.exports = routes;