"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmanager = void 0;
class Bookmanager {
    constructor() {
        this.books = [];
    }
    add(...book) {
        this.books.push(...book);
    }
    getlist() {
        return this.books;
    }
    findID(ID) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    }
    delete(ID) {
        let indexBookDelete = this.findID(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error(`Does not exist`);
        }
    }
    update(ID, name) {
        let indexBookUpdate = this.findID(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].name = name;
        }
        else {
            throw new Error(`Update Error `);
        }
    }
}
exports.Bookmanager = Bookmanager;
//# sourceMappingURL=Bookmanager.js.map