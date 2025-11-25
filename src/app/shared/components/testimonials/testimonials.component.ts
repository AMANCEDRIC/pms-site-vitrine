import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avis } from '../../../core/models/avis.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input() avis: Avis[] = [];
  currentIndex = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.avis.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.avis.length) % this.avis.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  get currentAvis(): Avis | null {
    return this.avis.length > 0 ? this.avis[this.currentIndex] : null;
  }
}

