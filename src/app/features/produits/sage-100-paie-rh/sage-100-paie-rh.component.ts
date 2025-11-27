import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';
import { RouterModule } from '@angular/router';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-100-paie-rh',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './sage-100-paie-rh.component.html',
  styleUrl: './sage-100-paie-rh.component.scss'
})
export class Sage100PaieRhComponent {}


