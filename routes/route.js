const express = require("express");
const route = express.Router();
const { smsValidation } = require("../validator/validation");
const userController = require("../controllers/userController");

route.get("/index", userController.index);
route.post("/create", smsValidation, userController.create);

module.exports = route;
