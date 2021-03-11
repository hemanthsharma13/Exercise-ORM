  
/*
File Description: Preparing all the imports according to the Type-Orm Configs
Author: Hemanth Sharma
Updated at : 11/03/2021
*/


import { Request, Response } from "express";

//importing the entities from the root folder


import { getRepository } from "typeorm";
import { Exercise } from "../entity/Exercise";


// Preparing all the API function calls 

/*  
C
R
U
D
Operations in the order
*/
export const getExercises = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const exercies = await getRepository(Exercise).find();
  return res.json(exercies);
};

export const getExercise = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Exercise).findOne(req.params.id);
  return res.json(results);
};

//Creating a new Exercise log 
export const createExercise = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newExercise = await getRepository(Exercise).create(req.body);
  const results = await getRepository(Exercise).save(newExercise);
  return res.json(results);
};

//Updating a user with respect to his id

export const updateExercise = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const exercise = await getRepository(Exercise).findOne(req.params.id);
  if (exercise) {
    getRepository(Exercise).merge(exercise, req.body);
    const results = await getRepository(Exercise).save(exercise);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};


// Deleting a user with respect to his id

export const deleteExercise = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(Exercise).delete(req.params.id);
  return res.json(results);
};

