"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var book1 = new main_1.Book('The Design of Everyday Things', 'Don Norman', true);
var book2 = new main_1.Book('The Most Human Human', 'Brian Christian', false);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfor = book.title + ' by ' + book.autor + '.';
    if (book.alreadyRead) {
        console.log("You already read ".concat(bookInfor));
    }
    else {
        console.log("You still need to read ".concat(bookInfor));
    }
}
