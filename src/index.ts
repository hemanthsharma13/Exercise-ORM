/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/

// Importing all the required dependencies and libraries

import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
//Create connection for all the db operations with TypeORm
import {createConnection} from 'typeorm'

import userRoutes from './routes/user.routes'
import exerciseRoutes from './routes/exercise.routes'

const app = express();
createConnection();   // Making the Connection with a call

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(userRoutes, exerciseRoutes);


app.listen(3000);
console.log('Server on port', 3000);