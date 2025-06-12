const express = require('express');
const Router = express.Router();
const AdminController= require("../controllers/AdimnControllers")

Router.post("/adminlogin",AdminController.adminLogin);
Router.post("/createuser",AdminController.CreateUser);
Router.get("/getuser",AdminController.getUserDetails);

module.exports = Router