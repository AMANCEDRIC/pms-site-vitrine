import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-developpement',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent],
  templateUrl: './developpement.component.html',
  styleUrl: './developpement.component.scss'
})
export class DeveloppementComponent {

}
