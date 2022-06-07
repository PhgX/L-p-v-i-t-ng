import { Book } from "./Book";

export class Bookmanager {
  books: Book[] = [];
  constructor() {}
  add(...book: Book[]): void {
    this.books.push(...book);
  }

  getlist() {
    return this.books;
  }

//   findID(ID: string) {
//     let i = -1;
//     for (let item of this.books) {
//       if (item.ID === ID) {
//         i = this.books.indexOf(item);
//       }
//     }
//     return i;
//   }

findID(ID:string){
    let i = -1;
    this.books.forEach((book, index) => {
        if(book.ID === ID){
            i = index;
        } 
      })
      return i;
}

  delete(ID: string): void {
    let indexBookDelete = this.findID(ID);
    if (indexBookDelete != -1) {
      this.books.splice(indexBookDelete, 1);
    } else {
      throw new Error(`Does not exist`);
    }
  }
  update(ID: string, name: string) {
    let indexBookUpdate = this.findID(ID);
    if (indexBookUpdate != -1) {
      this.books[indexBookUpdate].name = name;
    } else {
      throw new Error(`Update Error `);
    }
  }
}
