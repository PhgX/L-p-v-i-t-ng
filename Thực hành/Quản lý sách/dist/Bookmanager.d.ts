import { Book } from "./Book";
export declare class Bookmanager {
    books: Book[];
    constructor();
    add(...book: Book[]): void;
    getlist(): Book[];
    findID(ID: string): number;
    delete(ID: string): void;
    update(ID: string, name: string): void;
}
