import { Time } from "./main";

let time : Time = new Time ();
time.start();
let sum = 0;
for(let i = 0; i < 1e9; i++){
    sum += i
}
time.end();
console.log(time.getElapsedTime())
