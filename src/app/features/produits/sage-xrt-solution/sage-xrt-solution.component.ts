import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-xrt-solution',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './sage-xrt-solution.component.html',
  styleUrl: './sage-xrt-solution.component.scss'
})
export class SageXrtSolutionComponent {}


