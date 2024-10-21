import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {
  private storageKey = 'bookshelf';

  constructor() { }

  getBooks(): Book[] {
    const books = localStorage.getItem(this.storageKey);
    return books ? JSON.parse(books) : [];
  }

  addBook(book: Book): void {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  removeBook(bookId: string): void {
    let books = this.getBooks();
    books = books.filter((book: Book) => book.id !== bookId);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  clearBooks(): void {
    localStorage.removeItem(this.storageKey);
  }

}
