export class Book {
    _ID: string;
    _name: string;

    constructor(ID: string, name: string) {
        this._ID = ID;
        this._name = name;
    }

    get ID(){
        return this._ID;
    }
    set ID(ID: string){
        this._ID = ID
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
}