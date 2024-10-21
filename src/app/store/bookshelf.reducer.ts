import { createReducer, on } from '@ngrx/store';
import { addToBookshelf, removeFromBookshelf } from './bookshelf.actions';
import { BookshelfState, initialState } from './bookshelf.state';

export const bookshelfReducer = createReducer(
  initialState,
  on(addToBookshelf, (state, { book }) => ({
    ...state,
    books: [...state.books, book]
  })),
  on(removeFromBookshelf, (state, { id }) => ({
    ...state,
    books: state.books.filter(book => book.id !== id)
  }))
);
