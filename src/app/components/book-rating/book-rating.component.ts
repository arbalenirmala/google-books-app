import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  standalone: true,
  imports: [],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {
  @Input() rating: number = 0; // Default rating
  maxRating: number = 5; // Maximum rating value
  ratings: number[] = []; // Array for stars display
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Output event for rating change
  
  constructor() {
    this.ratings = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  // Method to clear the rating
  clearRating() {
    this.rating = 0;
  }

  rate(star: number) {
    this.rating = star; // Update the local rating
    this.ratingChange.emit(this.rating); // Emit the new rating
  }

}
