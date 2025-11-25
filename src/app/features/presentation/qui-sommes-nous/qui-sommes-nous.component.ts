import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-qui-sommes-nous',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent],
  templateUrl: './qui-sommes-nous.component.html',
  styleUrl: './qui-sommes-nous.component.scss'
})
export class QuiSommesNousComponent {
  aboutImages = [
    { src: 'assets/images/photos/IMG6.jpeg', delay: '0.1s', marginTop: '25%' },
    { src: 'assets/images/photos/IMG8.jpeg', delay: '0.3s', width: '50%' },
    { src: 'assets/images/photos/IMG7.jpg', delay: '0.5s' },
    { src: 'assets/images/photos/IMG3.jpeg', delay: '0.7s', width: '50%' }
  ];
}

