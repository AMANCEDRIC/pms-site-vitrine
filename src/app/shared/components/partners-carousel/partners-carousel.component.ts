import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  logo: string;
  description?: string;
  link?: string;
}

@Component({
  selector: 'app-partners-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-carousel.component.html',
  styleUrl: './partners-carousel.component.scss'
})
export class PartnersCarouselComponent implements OnInit, OnDestroy {
  partners: Partner[] = [
    { 
      name: 'Sage', 
      logo: 'assets/images/partners/sagecentre.png',
      description: 'Centre de Compétence MGE / GE'
    },
    { 
      name: 'Microsoft Partner', 
      logo: 'assets/images/partners/MicrosoftCertifiedPartner.png',
      description: 'Microsoft Certified Partner'
    },
    { 
      name: 'Afrik Lonnya', 
      logo: 'assets/images/partners/AFRIKLONYALOGO.png',
      description: 'BURKINA-FASO'
    },
    { 
      name: 'EPSON', 
      logo: 'assets/images/partners/Epson-Symbol.png',
      description: 'EXCEED YOUR VISION'
    },
    { 
      name: 'Sage Certification', 
      logo: 'assets/images/partners/sagecertificationpartner.jpg',
      description: 'Sage Certification Partner'
    }
  ];

  currentIndex = 0;
  itemsPerView = 4;
  private resizeListener?: () => void;
  private autoPlayInterval?: any;
  private isHovered = false;

  ngOnInit(): void {
    this.updateItemsPerView();
    this.resizeListener = () => this.updateItemsPerView();
    window.addEventListener('resize', this.resizeListener);
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    if (this.partners.length > this.itemsPerView) {
      this.autoPlayInterval = setInterval(() => {
        if (!this.isHovered) {
          if (this.canGoNext) {
            this.next();
          } else {
            this.currentIndex = 0; // Revenir au début
          }
        }
      }, 4000); // Change toutes les 4 secondes
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  updateItemsPerView(): void {
    if (window.innerWidth < 768) {
      this.itemsPerView = 2;
    } else if (window.innerWidth < 992) {
      this.itemsPerView = 3;
    } else {
      this.itemsPerView = 4;
    }
  }

  next(): void {
    const maxIndex = Math.max(0, this.partners.length - this.itemsPerView);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Revenir au début si on est à la fin
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Aller à la fin si on est au début
      const maxIndex = Math.max(0, this.partners.length - this.itemsPerView);
      this.currentIndex = maxIndex;
    }
  }

  get visiblePartners(): Partner[] {
    return this.partners.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }

  get canGoNext(): boolean {
    return this.currentIndex < this.partners.length - this.itemsPerView;
  }

  get canGoPrev(): boolean {
    return this.currentIndex > 0;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/partners/placeholder.png';
    }
  }

  getCurrentPage(): number {
    return Math.floor(this.currentIndex / this.itemsPerView);
  }

  getTotalPages(): number {
    return Math.ceil(this.partners.length / this.itemsPerView);
  }

  getDots(): number[] {
    return Array(this.getTotalPages()).fill(0).map((_, i) => i);
  }

  goToPage(page: number): void {
    this.currentIndex = page * this.itemsPerView;
  }
}

