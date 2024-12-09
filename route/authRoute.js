const express = require("express");
const { signup, login, logout } = require("../controller/AuthController");

const AuthRouter = express.Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/signin", login);

module.exports = AuthRouter;
