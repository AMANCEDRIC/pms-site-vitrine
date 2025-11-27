import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-100cloud-etats-financiers',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './etats-financiers.component.html',
  styleUrl: './etats-financiers.component.scss'
})
export class EtatsFinanciersComponent {}


