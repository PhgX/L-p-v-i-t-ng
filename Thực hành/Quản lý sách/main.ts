import { Book } from "./Book";
import { Bookmanager } from "./Bookmanager";

let book1 = new Book ('B001', 'Đồi gió hú')
let book2 = new Book ('B002', 'Số đỏ')
let book3 = new Book ('B003', 'Đất phương Nam')

let bookmanager = new Bookmanager ();
bookmanager.add(book1,book2,book3)

console.log(bookmanager.getlist())
// console.log(bookmanager.findID('B002'))

bookmanager.delete('B002')
console.log(bookmanager.getlist())

bookmanager.update('B001', 'Bão')
console.log(bookmanager.getlist())

let book4 = new Book ('B004', 'Truyện cổ Grim')
bookmanager.add(book4)
console.log(bookmanager.getlist())
// bookmanager.delete('B002')
// bookmanager.update('B002', 'book')