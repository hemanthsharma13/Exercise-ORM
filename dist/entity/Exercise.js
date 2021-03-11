"use strict";
/*
File Description: Preparing the entities using the type orm format( Schemas in database definition)
Author: Hemanth Sharma
Edited at:  11/03/2021

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
// Decorator functions for the database and its types( Typescript prefernces)
var Exercise = /** @class */ (function () {
    function Exercise() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Exercise.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 200
        }),
        __metadata("design:type", String)
    ], Exercise.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Exercise.prototype, "duration", void 0);
    __decorate([
        typeorm_1.Column({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP"; } }),
        __metadata("design:type", String)
    ], Exercise.prototype, "time", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.exercises; }),
        __metadata("design:type", User_1.User)
    ], Exercise.prototype, "user", void 0);
    Exercise = __decorate([
        typeorm_1.Entity()
    ], Exercise);
    return Exercise;
}());
exports.Exercise = Exercise;
