import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent {
  partners = [
    { name: 'Microsoft Certified Partner', logo: 'assets/images/partners/MicrosoftCertifiedPartner.png' },
    { name: 'Sage Centre', logo: 'assets/images/partners/sagecentre.png' },
    { name: 'Sage Certification Partner', logo: 'assets/images/partners/sagecertificationpartner.jpg' },
    { name: 'AFRIK LONYA', logo: 'assets/images/partners/AFRIKLONYALOGO.png' },
    { name: 'Epson', logo: 'assets/images/partners/Epson-Symbol.png' },
    { name: 'Sage Partner', logo: 'assets/images/partners/sagecentre.png' },
    { name: 'Sage Partner 2', logo: 'assets/images/partners/sagecertificationpartner.jpg' },
    { name: 'AFRIK LONYA 2', logo: 'assets/images/partners/AFRIKLONYALOGO.png' }
  ];
}


