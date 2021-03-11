/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/

//using basic column types and other functions of typeorm

import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Exercise } from './Exercise';

@Entity()
export class User {
  static Find(arg0: { id: any; }) {
      throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
   

  // As Many exercises are done by a single user we are importing the exercises from the user
  
  @OneToMany(type => Exercise, exercise => exercise.user)
  exercises: Exercise[]
  
}
