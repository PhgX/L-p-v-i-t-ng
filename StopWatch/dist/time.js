"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
let time = new main_1.Time();
time.start();
let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}
time.end();
console.log(time.getElapsedTime());
//# sourceMappingURL=time.js.map