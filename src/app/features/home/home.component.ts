import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvisService } from '../../core/services/avis.service';
import { CounterService } from '../../core/services/counter.service';
import { Avis } from '../../core/models/avis.model';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { PartnersCarouselComponent } from '../../shared/components/partners-carousel/partners-carousel.component';
import { AvisFormComponent } from '../../shared/components/avis-form/avis-form.component';
import { Subscription } from 'rxjs';

interface Statistic {
  value: number;
  label: string;
  icon: string;
  isSpecial?: boolean;
}

interface Feature {
  iconSvg: 'expertise' | 'solutions' | 'accompagnement';
  title: string;
  description: string;
}

interface Service {
  image: string;
  iconSvg: 'integrateur' | 'developpement' | 'formation';
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    TestimonialsComponent,
    PartnersCarouselComponent,
    AvisFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  avis: Avis[] = [];
  statsSectionVisible = false;
  animatedValues: number[] = [0, 0, 0, 0];
  cardVisible: boolean[] = [false, false, false, false];
  private counterSubscriptions: Subscription[] = [];
  private observer?: IntersectionObserver;

  statistics: Statistic[] = [
    { value: 200, label: 'Plus de 200 clients', icon: 'users' },
    { value: 30, label: "Plus de 30 ans d'expérience", icon: 'calendar' },
    { value: 1, label: 'Premier revendeur Sage 2025', icon: 'trophy', isSpecial: true },
    { value: 20, label: "Membres de l'équipe", icon: 'user-group' }
  ];

  features: Feature[] = [
    {
      iconSvg: 'expertise',
      title: 'Une expertise certifiée et reconnue',
      description: 'Avec plus de 30 ans d\'expérience en Afrique, PMS Informatique dispose d\'ingénieurs et de consultants agréés et certifiés, capables de mener à bien des projets complexes dans les secteurs public et privé.'
    },
    {
      iconSvg: 'solutions',
      title: 'Des solutions adaptées à vos enjeux',
      description: 'PMS Informatique propose des solutions sur mesure, construites autour des standards du marché (Sage 100cloud, FRP 1000, XRT…), et intégrant les dernières technologies : cloud, mobilité, dématérialisation, BI, etc.'
    },
    {
      iconSvg: 'accompagnement',
      title: 'Un accompagnement de proximité, centré sur l\'humain',
      description: 'De l\'audit initial à la formation des utilisateurs, PMS Informatique vous accompagne à chaque étape du projet, avec une approche basée sur le transfert de compétences et un partenariat durable.'
    }
  ];

  services: Service[] = [
    {
      image: 'assets/images/galerie/service-dev.jpg',
      iconSvg: 'integrateur',
      title: 'Intégrateur de solution Sage',
      description: 'Nous intégrons et configurons les solutions Sage adaptées à vos besoins métier, avec un accompagnement personnalisé pour optimiser votre gestion financière et comptable.',
      link: '/services/integrateur-solution'
    },
    {
      image: 'assets/images/galerie/image-dev.jpg',
      iconSvg: 'developpement',
      title: 'Développement Spécifique sur mesure',
      description: 'Nous développons des solutions sur mesure adaptées à vos processus métier uniques, en utilisant les dernières technologies pour répondre à vos besoins spécifiques.',
      link: '/services/developpement'
    },
    {
      image: 'assets/images/galerie/formation.jpg',
      iconSvg: 'formation',
      title: 'Formation & Assistance',
      description: 'Nous proposons des formations certifiantes et un accompagnement continu pour maîtriser vos outils et optimiser leur utilisation au quotidien.',
      link: '/services/formation'
    }
  ];

  aboutImages = [
    { src: 'assets/images/photos/IMG6.jpeg', delay: '0.1s', marginTop: '25%' },
    { src: 'assets/images/photos/IMG8.jpeg', delay: '0.3s', width: '50%' },
    { src: 'assets/images/photos/IMG7.jpg', delay: '0.5s' },
    { src: 'assets/images/photos/IMG3.jpeg', delay: '0.7s', width: '50%' }
  ];

  constructor(
    private avisService: AvisService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.loadAvis();
    this.setupIntersectionObserver();
    // Vérifier immédiatement si la section est visible
    setTimeout(() => this.checkStatsVisibility(), 100);
  }

  setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.cardVisible[index] = true;
            if (index === 0 && !this.statsSectionVisible) {
              this.statsSectionVisible = true;
              this.animateStatistics();
            }
          }, index * 150); // Délai en cascade
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observer chaque carte après un court délai
    setTimeout(() => {
      const cards = document.querySelectorAll('.stat-card');
      cards.forEach((card, index) => {
        this.observer?.observe(card);
      });
    }, 200);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkStatsVisibility();
  }

  checkStatsVisibility(): void {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && !this.statsSectionVisible) {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.statsSectionVisible = true;
        this.animateStatistics();
      }
    }
  }

  animateStatistics(): void {
    // Nettoyer les subscriptions précédentes
    this.counterSubscriptions.forEach(sub => sub.unsubscribe());
    this.counterSubscriptions = [];

    // Animer chaque statistique
    this.statistics.forEach((stat, index) => {
      const subscription = this.counterService.animateCounter(stat.value, 2000).subscribe({
        next: (value) => {
          this.animatedValues[index] = value;
        }
      });
      this.counterSubscriptions.push(subscription);
    });
  }

  ngOnDestroy(): void {
    this.counterSubscriptions.forEach(sub => sub.unsubscribe());
    this.observer?.disconnect();
  }

  loadAvis(): void {
    this.avisService.getAvis({ minNote: 3, limit: 10 }).subscribe({
      next: (response) => {
        if (response.success) {
          this.avis = response.data.avis;
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement des avis', error);
        // Fallback: utiliser getAvisApprouves si la nouvelle méthode échoue
        this.avisService.getAvisApprouves().subscribe({
          next: (avis) => {
            this.avis = avis.filter(a => a.note >= 3).slice(0, 10);
          }
        });
      }
    });
  }

  onAvisSubmitted(): void {
    this.loadAvis();
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
      // Trouver le placeholder dans le même conteneur
      const container = img.closest('.relative');
      if (container) {
        const placeholder = container.querySelector('.image-placeholder') as HTMLElement;
        if (placeholder) {
          placeholder.classList.remove('hidden');
          placeholder.classList.add('flex');
        }
      }
    }
  }
}

