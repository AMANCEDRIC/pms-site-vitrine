import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-100cloud-moyen-de-paiement',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './moyen-de-paiement.component.html',
  styleUrl: './moyen-de-paiement.component.scss'
})
export class MoyenDePaiementComponent {}


