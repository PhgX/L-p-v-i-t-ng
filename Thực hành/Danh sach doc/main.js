"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, autor, alreadyRead) {
        this._title = title;
        this._autor = autor;
        this._alreadyRead = alreadyRead;
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (autor) {
            this._autor = autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "alreadyRead", {
        get: function () {
            return this._alreadyRead;
        },
        set: function (alreadyRead) {
            this._alreadyRead = alreadyRead;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
exports.Book = Book;
