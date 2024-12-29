const express = require('express');
const { isValidUsernameController } = require('../controller/auth/isValidUsername.controller');
const publicRoutes = express.Router();

publicRoutes.post('/verifyUsername',isValidUsernameController);

module.exports = publicRoutes;