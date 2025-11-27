import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-sage-frp1000',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './sage-frp1000.component.html',
  styleUrl: './sage-frp1000.component.scss'
})
export class SageFrp1000Component {}


