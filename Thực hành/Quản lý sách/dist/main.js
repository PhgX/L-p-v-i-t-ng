"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const Bookmanager_1 = require("./Bookmanager");
let book1 = new Book_1.Book('B001', 'Đồi gió hú');
let book2 = new Book_1.Book('B002', 'Số đỏ');
let book3 = new Book_1.Book('B003', 'Đất phương Nam');
let bookmanager = new Bookmanager_1.Bookmanager();
bookmanager.add(book1, book2, book3);
console.log(bookmanager.getlist());
bookmanager.delete('B002');
console.log(bookmanager.getlist());
bookmanager.update('B001', 'Bão');
console.log(bookmanager.getlist());
let book4 = new Book_1.Book('B004', 'Truyện cổ Grim');
bookmanager.add(book4);
console.log(bookmanager.getlist());
//# sourceMappingURL=main.js.map