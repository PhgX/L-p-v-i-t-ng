"use strict";
exports.__esModule = true;
exports.setSpeed = exports.Fan = void 0;
var Fan = /** @class */ (function () {
    function Fan(speedName, status, radius, color) {
        if (status === void 0) { status = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = 'blue'; }
        this._speed = speedName;
        this._on = status;
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Fan.prototype, "Radius", {
        get: function () {
            return this._radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "Color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.changeStatus = function (status) {
        this._on = status;
    };
    Object.defineProperty(Fan.prototype, "Speed", {
        get: function () {
            return this._speed;
        },
        set: function (speedName) {
            if (speedName === "SLOW") {
                this.Speed = setSpeed.SLOW;
            }
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this._on === true) {
            return "Qu\u1EA1t \u0111ang b\u1EADt, speed : ".concat(this.Speed, ", color : ").concat(this.Color, ", radius : ").concat(this.Radius);
        }
        else {
            return "Qu\u1EA1t \u0111ang t\u1EAFt color : ".concat(this.Color, ", radius : ").concat(this.Radius);
        }
    };
    return Fan;
}());
exports.Fan = Fan;
var setSpeed;
(function (setSpeed) {
    setSpeed["SLOW"] = "SLOW";
    setSpeed["MEDIUM"] = "MEDIUM";
    setSpeed["FAST"] = "FAST";
})(setSpeed = exports.setSpeed || (exports.setSpeed = {}));
