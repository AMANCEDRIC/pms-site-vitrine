import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-100cloud-tresorerie',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './tresorerie.component.html',
  styleUrl: './tresorerie.component.scss'
})
export class TresorerieComponent {}


