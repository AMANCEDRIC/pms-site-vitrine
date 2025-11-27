import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-bi-reporting',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './bi-reporting.component.html',
  styleUrl: './bi-reporting.component.scss'
})
export class BiReportingComponent {}


