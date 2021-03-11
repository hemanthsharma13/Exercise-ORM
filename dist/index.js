"use strict";
/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing all the required dependencies and libraries
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
//Create connection for all the db operations with TypeORm
var typeorm_1 = require("typeorm");
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var exercise_routes_1 = __importDefault(require("./routes/exercise.routes"));
var app = express_1.default();
typeorm_1.createConnection(); // Making the Connection with a call
// Middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
// routes
app.use(user_routes_1.default, exercise_routes_1.default);
app.listen(3000);
console.log('Server on port', 3000);
