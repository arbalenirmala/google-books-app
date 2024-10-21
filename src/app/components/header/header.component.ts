import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BookshelfService } from '../../services/bookshelf.service';
import { CommonModule } from '@angular/common';
import { selectBooksCount } from '../../store/bookshelf.selectors';

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

  constructor(private store: Store, 
    private bookshelfService: BookshelfService) {
    this.bookshelfCount$ = this.store.select(selectBooksCount);
    console.log(this.bookshelfCount$);
  }

  ngOnInit() {
    this.bookshelfCount$ = this.store.select(selectBooksCount);
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
