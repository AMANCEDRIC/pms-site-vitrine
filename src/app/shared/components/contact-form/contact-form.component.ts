import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';
import { ContactFormData } from '../../../core/models/contact.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Output() contactSubmitted = new EventEmitter<void>();
  
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.contactForm.valid) {
      this.loading = true;
      // Adapter les données pour correspondre au modèle ContactFormData
      const formData: ContactFormData = {
        nom: this.contactForm.value.nom,
        prenom: '', // Vide car on n'a plus ce champ
        email: this.contactForm.value.email,
        telephone: '',
        entreprise: '',
        sujet: this.contactForm.value.sujet,
        message: this.contactForm.value.message
      };

      this.contactService.envoyerContact(formData).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.contactForm.reset();
          this.submitted = false;
          this.contactSubmitted.emit();
          
          setTimeout(() => {
            this.success = false;
          }, 5000);
        },
        error: (err) => {
          this.error = 'Une erreur est survenue. Veuillez réessayer.';
          this.loading = false;
          console.error('Erreur lors de l\'envoi du message', err);
        }
      });
    }
  }
}

