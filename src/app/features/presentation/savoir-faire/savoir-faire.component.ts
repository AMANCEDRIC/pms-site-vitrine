import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-savoir-faire',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent],
  templateUrl: './savoir-faire.component.html',
  styleUrl: './savoir-faire.component.scss'
})
export class SavoirFaireComponent {
  formationImage = 'assets/images/icons/formation.webp';
}

