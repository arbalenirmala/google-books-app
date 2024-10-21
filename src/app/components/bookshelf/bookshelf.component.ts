import { Component, OnInit } from '@angular/core';
import { BookshelfService } from '../../services/bookshelf.service';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';
import { BookRatingComponent } from '../book-rating/book-rating.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllBooks } from '../../store/bookshelf.selectors';
import { addToBookshelf, removeFromBookshelf } from '../../store/bookshelf.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookshelf',
  standalone: true,
  imports: [FormsModule, BookRatingComponent, CommonModule],
  templateUrl: './bookshelf.component.html',
  styleUrl: './bookshelf.component.scss'
})
export class BookshelfComponent implements OnInit {

  books: Book[] = [];
  bookshelf$: Observable<Book[]>;


  constructor(private bookshelfService: BookshelfService, private store: Store) {
    this.bookshelf$ = this.store.select(selectAllBooks);
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    const storedBooks = localStorage.getItem('storageKey');
    if (storedBooks) {
      const parsedBooks = JSON.parse(storedBooks);
      if (Array.isArray(parsedBooks)) {
        this.books = parsedBooks;
      } else {
        console.error('Parsed data is not an array:', parsedBooks);
      }
    }
  
  }

  addBook(book: Book): void {
    this.store.dispatch(addToBookshelf({ book }));
  }

  removeBook(bookId: string): void {
    this.store.dispatch(removeFromBookshelf({ id: bookId }));

  }

}
