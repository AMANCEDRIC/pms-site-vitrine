import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

interface TeamMember {
  name: string;
  title: string;
  photo: string;
}

@Component({
  selector: 'app-equipe-technique',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent],
  templateUrl: './equipe-technique.component.html',
  styleUrl: './equipe-technique.component.scss'
})
export class EquipeTechniqueComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  itemsPerView = 3;
  private resizeListener?: () => void;
  private isHovered = false;

  teamMembers: TeamMember[] = [
    {
      name: 'M. NINKIEMA Marcel',
      title: 'Directeur Général',
      photo: 'assets/images/photos/directeur general.png' // À remplacer par la vraie photo
      },
      {
      name: 'M.  N. Youssouf',
      title: 'Responsable Financier',
      photo: 'assets/images/photos/Youssouf.png' // À remplacer par la vraie photo
    },
    
    {
      name: 'M. AKE Yves Stephane',
      title: 'Responsable Technique',
      photo: 'assets/images/photos/M.-Stephane.png' // À remplacer par la vraie photo
    }
  ];

  ngOnInit(): void {
    this.updateItemsPerView();
    this.resizeListener = () => this.updateItemsPerView();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  updateItemsPerView(): void {
    if (window.innerWidth < 768) {
      this.itemsPerView = 1;
    } else if (window.innerWidth < 992) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3; // Toujours 3 sur desktop car on a 3 membres
    }
  }

  next(): void {
    const maxIndex = Math.max(0, this.teamMembers.length - this.itemsPerView);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      const maxIndex = Math.max(0, this.teamMembers.length - this.itemsPerView);
      this.currentIndex = maxIndex;
    }
  }

  get visibleMembers(): TeamMember[] {
    return this.teamMembers.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }

  get canGoNext(): boolean {
    return this.currentIndex < this.teamMembers.length - this.itemsPerView;
  }

  get canGoPrev(): boolean {
    return this.currentIndex > 0;
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/images/photos/placeholder.jpg';
    }
  }
}

