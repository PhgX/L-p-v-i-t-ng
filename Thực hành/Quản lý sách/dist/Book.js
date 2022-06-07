"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(ID, name) {
        this._ID = ID;
        this._name = name;
    }
    get ID() {
        return this._ID;
    }
    set ID(ID) {
        this._ID = ID;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map