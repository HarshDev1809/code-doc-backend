const express = require('express');
const { isUsernameAvailableController } = require('../controller/auth/isUsernameAvailable.controller');
const { isEmailAvailableController } = require('../controller/auth/isEmailAvailable.controller');
const publicRoutes = express.Router();

publicRoutes.post('/isAvailable/username',isUsernameAvailableController);
publicRoutes.post('/isAvailable/email',isEmailAvailableController);

module.exports = publicRoutes;