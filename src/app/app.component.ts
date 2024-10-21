import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { bookshelfReducer } from './store/bookshelf.reducer';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { HttpClientModule } from '@angular/common/http';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { FormsModule } from '@angular/forms';
import { BookRatingComponent } from './components/book-rating/book-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    HeaderComponent,
    BookSearchComponent,
    BookshelfComponent,
    BookRatingComponent,
    //StoreModule.forRoot({ bookshelf: booksReducer })
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'google-books-app';
}
