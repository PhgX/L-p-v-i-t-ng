"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["Other"] = 3] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
;
class Employee {
    constructor(name, gender = Gender.Other, dateOfBirth, email, phone) {
        this._name = name;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._phone = phone;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=main.js.map