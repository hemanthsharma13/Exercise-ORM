/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/



import {Entity, Column, PrimaryGeneratedColumn,ManyToOne, Timestamp} from 'typeorm'
import { User } from './User';


// Decorator functions for the database and its types( Typescript prefernces)

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      type: "varchar", 
      length: 200
  })
  description: string;


  @Column()
      duration : string

   @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
      time: string;
    //  As every  user has many number of exercises  we are using a many to one relationships 

    @ManyToOne(type => User, user => user.exercises)
    user: User;  
  
  
}