const express = require('express');
const { verifySignUpMiddleware, verifySignInMiddleware } = require('../middleware/auth/verifyAuth.middleware');
const signUpController = require('../controller/auth/signUp.controller');
const signInController = require('../controller/auth/signIn.controller');
const authRoute = express.Router();

authRoute.post("/signup",[verifySignUpMiddleware],signUpController);
authRoute.post("/signin",[verifySignInMiddleware],signInController);

module.exports = authRoute;