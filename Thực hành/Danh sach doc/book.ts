import { Book } from "./main";

let book1 = new Book ('The Design of Everyday Things', 'Don Norman', true);
let book2 = new Book ('The Most Human Human', 'Brian Christian', false);

let books : Book[] = [];
books.push(book1, book2);

for(let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfor = book.title + ' by ' + book.autor + '.';
    if(book.alreadyRead) {
        console.log(`You already read ${bookInfor}`)
    } else {
        console.log(`You still need to read ${bookInfor}`)
    }
}