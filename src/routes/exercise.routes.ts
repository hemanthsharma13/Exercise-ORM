/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/

// Using a route method of the express
import { Router } from "express";
const router = Router();

import {
  getExercises,
  getExercise,
  createExercise,
  updateExercise,
  deleteExercise
} from "../controllers/exercise.controller";

router.get("/exercises", getExercises);  //returns all the exercises
router.get("/exercises/:id", getExercise); // returns exercises w.r.t id
router.post("/exercises", createExercise);  // creates a user and returns the same
router.put("/exercises/:id", updateExercise);  // update a user with that id 
router.delete("/exercises/:id", deleteExercise);  // deleting a user with that id 

export default router;
