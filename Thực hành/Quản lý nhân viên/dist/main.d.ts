export declare enum Gender {
    Male = 1,
    Female = 2,
    Other = 3
}
export declare class Employee {
    _name: string;
    _gender: Gender;
    _dateOfBirth: string;
    _email: string;
    _phone: number;
    constructor(name: string, gender: Gender, dateOfBirth: string, email: string, phone: number);
    get name(): string;
    set name(name: string);
    get dateOfBirth(): string;
    set dateOfBirth(dateOfBirth: string);
    get email(): string;
    set email(email: string);
    get phone(): number;
    set phone(phone: number);
}
