"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
let fan1 = new main_1.Fan(`SLOW`, true);
console.log(fan1.toString());
let fan2 = new main_1.Fan(`MEDIUM`, true);
console.log(fan2.toString());
let fan3 = new main_1.Fan(`FAST`, true);
console.log(fan3.toString());
let fan4 = new main_1.Fan(`FAST`, false);
console.log(fan4.toString());
//# sourceMappingURL=fan.js.map