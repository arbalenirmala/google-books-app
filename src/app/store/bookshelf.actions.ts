import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

// Action to add a book to the bookshelf
export const addToBookshelf = createAction(
  '[Bookshelf] Add Book',
  props<{ book: Book }>()
);

// Action to remove a book from the bookshelf
export const removeFromBookshelf = createAction(
  '[Bookshelf] Remove Book',
  props<{ id: string }>()
);
