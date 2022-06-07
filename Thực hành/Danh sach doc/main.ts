export class Book {
  _title: string;
  _autor: string;
  _alreadyRead: boolean;
  constructor(title: string, autor: string, alreadyRead: boolean) {
    this._title = title;
    this._autor = autor;
    this._alreadyRead = alreadyRead;
  }
  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get autor() {
    return this._autor;
  }
  set autor(autor: string) {
    this._autor = autor;
  }

  get alreadyRead() {
    return this._alreadyRead;
  }
  set alreadyRead(alreadyRead: boolean) {
    this._alreadyRead = alreadyRead;
  }
}
