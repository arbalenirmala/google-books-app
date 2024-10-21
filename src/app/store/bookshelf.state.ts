import { Book } from '../models/book.model';

export interface BookshelfState {
  books: Book[];
}

export const initialState: BookshelfState = {
  books: []
};
