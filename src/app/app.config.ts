import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient provider

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { BooksReducer } from '../app/store/books.reducer';
import { StoreModule } from '@ngrx/store';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),
    provideStore({ bookshelf: BooksReducer })
  ]
};
