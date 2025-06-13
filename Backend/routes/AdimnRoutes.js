const express = require('express');
const Router = express.Router();
const AdminController= require("../controllers/AdimnControllers")
const UserController = require("../controllers/UserControllers")
Router.post("/adminlogin",AdminController.adminLogin);
Router.post("/createuser",AdminController.CreateUser);
Router.post("/taskassign",AdminController.taskAssign);
Router.get("/getuser",AdminController.getUserDetails);
Router.get("/gettasks",AdminController.getAllTasks);


// ----------USER ROUTERS--------------

Router.post("/userlogin",UserController.UserLogin)
Router.get("/getusertasks",UserController.getAllUserTasks);


module.exports = Router