"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor() {
        this._startTime = new Date().getMilliseconds();
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(startTime) {
        this._startTime = startTime;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(endTime) {
        this._endTime = endTime;
    }
    start() {
        this._startTime = new Date().getMilliseconds();
    }
    end() {
        this._endTime = new Date().getMilliseconds();
    }
    getElapsedTime() {
        return this._endTime - this._startTime;
    }
}
exports.Time = Time;
//# sourceMappingURL=main.js.map