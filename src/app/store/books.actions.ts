import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

export const addToBookshelf = createAction(
  '[Bookshelf] Add Book',
  props<{ book: Book }>()
);

export const removeFromBookshelf = createAction(
  '[Bookshelf] Remove Book',
  props<{ bookId: string }>()
);
