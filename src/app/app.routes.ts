import { Routes } from '@angular/router';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';

export const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: BookSearchComponent },
    { path: 'bookshelf', component: BookshelfComponent },
    { path: '**', redirectTo: '/search' }
];
