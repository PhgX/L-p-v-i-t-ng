import { Fan } from "./main";

let fan1 : Fan = new Fan(`SLOW`, true)
console.log(fan1.toString())

let fan2 : Fan = new Fan(`MEDIUM`, true)
console.log(fan2.toString())

let fan3 : Fan = new Fan(`FAST`, true)
console.log(fan3.toString())

let fan4 : Fan = new Fan(`FAST`, false)
console.log(fan4.toString())