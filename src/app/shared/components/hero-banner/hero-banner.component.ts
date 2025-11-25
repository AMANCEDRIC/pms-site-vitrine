import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = 'assets/images/icons/pms-cover.jpeg';
}

