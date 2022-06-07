export enum Gender {Male, Female , Other  };

export class Employee {
    _name : string;
    _gender: Gender;
    _dateOfBirth: string;
    _email: string;
    _phone: number;
    constructor(name: string, gender: Gender = Gender.Other, dateOfBirth: string, email: string, phone: number) {
        this._name = name;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._phone = phone;
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    // get gender(){
    //     return this._gender;
    // }
    // set gender(gender: boolean){
    //     this._gender = gender;
    // }
    get dateOfBirth(){
        return this._dateOfBirth;
    }
    set dateOfBirth(dateOfBirth: string){
        this._dateOfBirth = dateOfBirth;
    }
    get email(){
        return this._email;
    }
    set email(email: string){
        this._email = email;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone: number){
        this._phone = phone; 
    }
}

