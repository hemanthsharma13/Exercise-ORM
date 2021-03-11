/*
File Description: Preparing all the controllers for the API for user functions
Author: Hemanth Sharma
Updated at : 11/03/2021
*/

import { Request, Response } from "express";

//importing the required packages from typeorm
import { getRepository } from "typeorm";

//importing the user entity from the root folder
import { User } from "../entity/User";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};

//using a get request 
export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(User).findOne(req.params.id);
  return res.json(results);
};


//post request for creating a user
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(User).create(req.body);
  const results = await getRepository(User).save(newUser);
  return res.json(results);
};

//update request using an id 

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};

// deleting a user with the same id as a parameter

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(User).delete(req.params.id);
  return res.json(results);
};
