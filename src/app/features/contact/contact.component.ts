import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, HeroBannerComponent, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onContactSubmitted(): void {
    // Optionnel : action après soumission du formulaire
    console.log('Formulaire de contact soumis');
  }
}

