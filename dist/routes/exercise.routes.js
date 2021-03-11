"use strict";
/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Using a route method of the express
var express_1 = require("express");
var router = express_1.Router();
var exercise_controller_1 = require("../controllers/exercise.controller");
router.get("/exercises", exercise_controller_1.getExercises); //returns all the exercises
router.get("/exercises/:id", exercise_controller_1.getExercise); // returns exercises w.r.t id
router.post("/exercises", exercise_controller_1.createExercise); // creates a user and returns the same
router.put("/exercises/:id", exercise_controller_1.updateExercise); // update a user with that id 
router.delete("/exercises/:id", exercise_controller_1.deleteExercise); // deleting a user with that id 
exports.default = router;
