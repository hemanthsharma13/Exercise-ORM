/*
File Description: Defining the route methods with respect ot the requirement
Author: Hemanth Sharma
Edited at:  11/03/2021

*/


import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/users", getUsers);   //retunrs all the users
router.get("/users/:id", getUser); // returns all the user with that id ( Apparently only one)
router.post("/users", createUser); // posting a form user 
router.put("/users/:id", updateUser); // updating a user w.r.t id
router.delete("/users/:id", deleteUser); // deleting a user 

export default router;
