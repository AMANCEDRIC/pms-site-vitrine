import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  isVisible = true;
  isPresentationDropdownOpen = false;
  private scrollThreshold = 50; // Pixels de scroll avant d'activer l'animation
  private lastScrollPosition = 0;
  private hideTimeout?: any;
  private showTimeout?: any;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > this.scrollThreshold;
    
    // Toujours afficher en haut de la page
    if (scrollPosition < 10) {
      this.isVisible = true;
      this.clearTimeouts();
      this.lastScrollPosition = scrollPosition;
      return;
    }
    
    // Animation hide/show basée sur la direction du scroll
    if (scrollPosition > this.lastScrollPosition && scrollPosition > 100) {
      // Scroll vers le bas - cacher la navbar
      this.clearTimeouts();
      this.hideTimeout = setTimeout(() => {
        this.isVisible = false;
        // Réapparaître automatiquement après 1.5 secondes même si on continue à descendre
        this.showTimeout = setTimeout(() => {
          this.isVisible = true;
        }, 1500);
      }, 100);
    } else if (scrollPosition < this.lastScrollPosition) {
      // Scroll vers le haut - afficher immédiatement la navbar
      this.clearTimeouts();
      this.isVisible = true;
    } else if (scrollPosition === this.lastScrollPosition) {
      // Pas de mouvement - réafficher après un court délai
      this.clearTimeouts();
      this.showTimeout = setTimeout(() => {
        this.isVisible = true;
      }, 500);
    }
    
    this.lastScrollPosition = scrollPosition;
  }

  private clearTimeouts(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }
  }

  ngOnInit(): void {
    // Vérifier la position initiale
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    this.clearTimeouts();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  togglePresentationDropdown() {
    this.isPresentationDropdownOpen = !this.isPresentationDropdownOpen;
  }

  openPresentationDropdown() {
    this.isPresentationDropdownOpen = true;
  }

  closePresentationDropdown() {
    this.isPresentationDropdownOpen = false;
  }
}

