import { Component } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import {FormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../../models/book.model';
import { BookshelfService } from '../../services/bookshelf.service';
import {BookRatingComponent} from '../book-rating/book-rating.component';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [FormsModule, HttpClientModule, BookRatingComponent],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private googleBooksService: GoogleBooksService , 
    private bookshelfService: BookshelfService
  ) {}

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
    let a=this.bookshelfService.getBooks();
    const alreadyInBookshelf = a.find((b) => b.id === book.id);
    if(!alreadyInBookshelf){
      const bookToAdd: Book = {
        id: book.id,
        volumeInfo: {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors || [],
          description: book.volumeInfo.description || 'No description available',
          imageLinks: {
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail-url'
          }
        },
        rating: 0,
      };
      this.bookshelfService.addBook(bookToAdd);
    }
  }

}
