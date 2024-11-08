import { Component } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookshelfService } from '../../services/bookshelf.service';
import { BookRatingComponent } from '../book-rating/book-rating.component';
import { Store } from '@ngrx/store';
import { addToBookshelf } from '../../store/bookshelf.actions';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [FormsModule, 
            BookRatingComponent],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  storageKey = 'bookshelf';

  constructor(
    private googleBooksService: GoogleBooksService,
    private bookshelfService: BookshelfService,
    private store: Store
  ) { }

  searchBooks(): void {
    if (this.searchQuery.trim() === '') return;

    this.googleBooksService.searchBooks(this.searchQuery).subscribe(
      (response) => {
        this.searchResults = response.items || [];
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  addToBookshelf(book: Book): void {
    this.store.dispatch(addToBookshelf({ book }));
    localStorage.setItem(this.storageKey, JSON.stringify(book));

    alert('Book added!');
  }
}
