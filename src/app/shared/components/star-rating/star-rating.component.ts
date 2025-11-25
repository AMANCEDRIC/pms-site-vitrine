import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Input() readonly: boolean = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get stars(): boolean[] {
    return Array(this.maxRating).fill(false).map((_, i) => i < this.rating);
  }
}

