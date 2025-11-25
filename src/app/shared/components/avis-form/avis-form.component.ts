import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvisService } from '../../../core/services/avis.service';
import { AvisFormData } from '../../../core/models/avis.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-avis-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StarRatingComponent],
  templateUrl: './avis-form.component.html',
  styleUrl: './avis-form.component.scss'
})
export class AvisFormComponent {
  @Output() avisSubmitted = new EventEmitter<void>();
  
  avisForm: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private avisService: AvisService
  ) {
    this.avisForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      entreprise: [''],
      note: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      commentaire: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.avisForm.valid) {
      this.loading = true;
      const formData: AvisFormData = this.avisForm.value;

      this.avisService.envoyerAvis(formData).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.avisForm.reset();
          this.avisForm.patchValue({ note: 5 });
          this.submitted = false;
          this.avisSubmitted.emit();
          
          setTimeout(() => {
            this.success = false;
          }, 5000);
        },
        error: (err) => {
          this.error = 'Une erreur est survenue. Veuillez réessayer.';
          this.loading = false;
          console.error('Erreur lors de l\'envoi de l\'avis', err);
        }
      });
    }
  }

  setRating(rating: number): void {
    this.avisForm.patchValue({ note: rating });
  }
}

