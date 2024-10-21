import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookshelfState } from './bookshelf.state';

// Feature selector for the bookshelf state
export const selectBookshelfState = createFeatureSelector<BookshelfState>('bookshelf');

// Selector to get all books in the bookshelf
export const selectAllBooks = createSelector(
  selectBookshelfState,
  (state: BookshelfState) => state.books
);

// Selector to get the count of books in the bookshelf
export const selectBooksCount = createSelector(
  selectBookshelfState,
  (state: BookshelfState) => state.books.length
);
