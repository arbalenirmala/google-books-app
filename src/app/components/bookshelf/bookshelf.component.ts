import { Component, OnInit } from '@angular/core';
import { BookshelfService } from '../../services/bookshelf.service';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';
import { BookRatingComponent } from '../book-rating/book-rating.component';

@Component({
  selector: 'app-bookshelf',
  standalone: true,
  imports: [FormsModule, BookRatingComponent],
  templateUrl: './bookshelf.component.html',
  styleUrl: './bookshelf.component.scss'
})
export class BookshelfComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookshelfService: BookshelfService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookshelfService.getBooks();
  }

  addBook(book: Book): void {
    this.bookshelfService.addBook(book);
    this.loadBooks();
  }

  removeBook(bookId: string): void {
    this.bookshelfService.removeBook(bookId);
    this.loadBooks();
  }

}
