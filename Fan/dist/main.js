"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSpeed = exports.Fan = void 0;
class Fan {
    constructor(speedName, status = false, radius = 5, color = 'blue') {
        this._speed = speedName;
        this._on = status;
        this._radius = radius;
        this._color = color;
    }
    get Radius() {
        return this._radius;
    }
    get Color() {
        return this._color;
    }
    changeStatus(status) {
        this._on = status;
    }
    set Speed(speedName) {
        if (speedName === `SLOW`) {
            this.Speed = setSpeed.SLOW;
        }
        else if (speedName === `MEDIUM`) {
            this.Speed = setSpeed.MEDIUM;
        }
        else if (speedName === `FAST`) {
            this.Speed = setSpeed.FAST;
        }
    }
    get Speed() {
        return this._speed;
    }
    toString() {
        if (this._on === true) {
            return `Quạt đang bật, speed : ${this.Speed}, color : ${this.Color}, radius : ${this.Radius}`;
        }
        else {
            return `Quạt đang tắt, color : ${this.Color}, radius : ${this.Radius}`;
        }
    }
}
exports.Fan = Fan;
var setSpeed;
(function (setSpeed) {
    setSpeed["SLOW"] = "SLOW";
    setSpeed["MEDIUM"] = "MEDIUM";
    setSpeed["FAST"] = "FAST";
})(setSpeed = exports.setSpeed || (exports.setSpeed = {}));
//# sourceMappingURL=main.js.map