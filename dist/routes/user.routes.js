"use strict";
/*
File Description: Defining the route methods with respect ot the requirement
Author: Hemanth Sharma
Edited at:  11/03/2021

*/
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var user_controller_1 = require("../controllers/user.controller");
router.get("/users", user_controller_1.getUsers); //retunrs all the users
router.get("/users/:id", user_controller_1.getUser); // returns all the user with that id ( Apparently only one)
router.post("/users", user_controller_1.createUser); // posting a form user 
router.put("/users/:id", user_controller_1.updateUser); // updating a user w.r.t id
router.delete("/users/:id", user_controller_1.deleteUser); // deleting a user 
exports.default = router;
