import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BookshelfService } from '../../services/bookshelf.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userName: string = 'John Doe';
  isLoggedIn: boolean = false;

  bookshelfCount$: Observable<number>;
  bookshelfCount!: number;

  constructor(private store: Store<{ bookshelf: Book[] }>, private bookshelfService: BookshelfService) {
    // Select the bookshelf from state and display its length
    this.bookshelfCount$ = this.store.select(state => state.bookshelf.length);
    console.log(this.bookshelfCount$);
  }

  ngOnInit() {
    this.bookshelfCount = this.bookshelfService.getBooks().length;
    console.log(this.bookshelfCount)
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
