import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoSlideInterval?: any;
  
  slides: CarouselSlide[] = [
    {
      image: 'assets/images/photos/img1.jpeg',
      title: 'Pms inf<span style="color: green;">o</span>rmatique',
      description: 'Réalisation et mise en œuvre de systèmes complexes avec transfert technique et formation des hommes.',
      buttonText: 'En savoir plus',
      buttonLink: '/presentation/qui-sommes-nous'
    },
    {
      image: 'assets/images/photos/IMG11.jpeg',
      title: 'Pms inf<span style="color: green;">o</span>rmatique',
      description: 'Notre offre s\'organise autour des standards du marché et des évolutions récentes des TIC.',
      buttonText: 'En savoir plus',
      buttonLink: '/presentation/qui-sommes-nous'
    },
    {
      image: 'assets/images/photos/IMG9.jpeg',
      title: 'Pms inf<span style="color: green;">o</span>rmatique',
      description: 'Pour renforcer vos compétences, PMS Informatique offre des stages sur les logiciels Sage 100cloud.',
      buttonText: 'S\'INSCRIRE',
      buttonLink: '/services/formation'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
}

