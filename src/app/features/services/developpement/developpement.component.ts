import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-developpement',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './developpement.component.html',
  styleUrl: './developpement.component.scss'
})
export class DeveloppementComponent {

}
