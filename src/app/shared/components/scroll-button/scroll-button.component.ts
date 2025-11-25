import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-button.component.html',
  styleUrl: './scroll-button.component.scss'
})
export class ScrollButtonComponent implements OnInit, OnDestroy {
  showButton = false;
  isAtTop = true;
  private scrollThreshold = 300;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    // Afficher le bouton après un certain scroll
    this.showButton = scrollPosition > this.scrollThreshold;
    
    // Déterminer si on est en haut ou en bas
    const isNearTop = scrollPosition < 100;
    const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100;
    
    this.isAtTop = isNearTop || (!isNearBottom && scrollPosition < documentHeight / 2);
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    // Nettoyage si nécessaire
  }

  scroll(): void {
    if (this.isAtTop) {
      // Aller en bas
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Aller en haut
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}

