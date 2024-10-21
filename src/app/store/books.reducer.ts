// store/books.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { addToBookshelf, removeFromBookshelf } from './books.actions';
import { Book } from '../models/book.model';

export interface BooksState {
  bookshelf: Book[];
}

export const initialState: BooksState = {
  bookshelf: [],
};

const _booksReducer = createReducer(
    initialState,
    on(addToBookshelf, (state, { book }) => ({
      ...state,
      bookshelf: [...state.bookshelf, book],
    })),
    on(removeFromBookshelf, (state, { bookId }) => ({
      ...state,
      bookshelf: state.bookshelf.filter(book => book.id !== bookId),
    }))
  );

export function BooksReducer(state: BooksState | undefined, action: Action) {
    return _booksReducer(state, action);
  }
