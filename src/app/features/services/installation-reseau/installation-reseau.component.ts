import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-installation-reseau',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent],
  templateUrl: './installation-reseau.component.html',
  styleUrl: './installation-reseau.component.scss'
})
export class InstallationReseauComponent {

}
