import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  standalone: true,
  imports: [],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {
  @Input() rating: number = 0;
  maxRating: number = 5;
  ratings: number[] = [];
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.ratings = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  clearRating() {
    this.rating = 0;
  }

  rate(star: number) {
    this.rating = star;
    this.ratingChange.emit(this.rating);
  }

}
