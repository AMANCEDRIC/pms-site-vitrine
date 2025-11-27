import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-100cloud-immobilisation',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './immobilisation.component.html',
  styleUrl: './immobilisation.component.scss'
})
export class ImmobilisationComponent {}


