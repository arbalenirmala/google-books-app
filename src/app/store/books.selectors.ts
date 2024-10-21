// books.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.reducer';

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectBookshelf = createSelector(
  selectBooksState,
  (state: BooksState) => state.bookshelf
);
