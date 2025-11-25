import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.scss'
})
export class PageLoaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  private minDisplayTime = 1000; // Temps minimum d'affichage (1 seconde)
  private maxDisplayTime = 3000; // Temps maximum d'affichage (3 secondes)
  private startTime = Date.now();
  private loadListener?: () => void;

  ngOnInit(): void {
    this.startTime = Date.now();
    
    // Attendre que la page soit complètement chargée
    if (document.readyState === 'complete') {
      this.hideLoader();
    } else {
      this.loadListener = () => this.hideLoader();
      window.addEventListener('load', this.loadListener);
    }

    // Fallback : masquer après un délai maximum
    setTimeout(() => {
      if (this.isLoading) {
        this.hideLoader();
      }
    }, this.maxDisplayTime);
  }

  ngOnDestroy(): void {
    if (this.loadListener) {
      window.removeEventListener('load', this.loadListener);
    }
  }

  private hideLoader(): void {
    if (!this.isLoading) return;
    
    // S'assurer que le loader reste visible au moins le temps minimum
    const elapsed = Date.now() - this.startTime;
    const remainingTime = Math.max(0, this.minDisplayTime - elapsed);

    setTimeout(() => {
      this.isLoading = false;
    }, remainingTime);
  }
}

