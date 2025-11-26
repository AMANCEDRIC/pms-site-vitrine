import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

interface Solution {
  image: string;
  title: string;
  description: string;
  iconColor: 'primary' | 'orange' | 'yellow';
}

@Component({
  selector: 'app-integrateur-solution',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent],
  templateUrl: './integrateur-solution.component.html',
  styleUrl: './integrateur-solution.component.scss'
})
export class IntegrateurSolutionComponent {
  solutions: Solution[] = [
    {
      image: 'assets/images/galerie/service-dev.jpg',
      title: 'NOVA-PAIE',
      description: 'Grâce au Plan de Paie pré-paramétré par catégorie de salariés et à la modélisation comptable, vous gérez sereinement les contraintes légales et réglementaires.',
      iconColor: 'primary'
    },
    {
      image: 'assets/images/galerie/image-dev.jpg',
      title: 'SAGE 100cloud',
      description: 'Gagnez du temps grâce à l\'automatisation et réduisez le temps consacré aux tâches administratives, à la collecte d\'informations clients et à la saisie des données.',
      iconColor: 'orange'
    },
    {
      image: 'assets/images/galerie/formation.jpg',
      title: 'Sage 100cloud Paie & RH',
      description: 'Pour les entreprises de plus de 200 salariés, un logiciel dédié aux directions financières pour accéder en toute confiance à une vue experte de leur activité.',
      iconColor: 'primary'
    },
    {
      image: 'assets/images/galerie/service-dev.jpg',
      title: 'Sage FRP1000',
      description: 'Pour les entreprises de plus de 200 salariés, un logiciel dédié aux directions financières pour accéder en toute confiance à une vue experte de leur activité.',
      iconColor: 'orange'
    },
    {
      image: 'assets/images/galerie/image-dev.jpg',
      title: 'Sage 100cloud Trésorerie',
      description: 'Nos solutions facilitent ces opérations quotidiennes. Conçues pour être facilement prises en main, elles comportent des fonctions limitant les opérations répétitives et les sources d\'erreur.',
      iconColor: 'primary'
    },
    {
      image: 'assets/images/galerie/formation.jpg',
      title: 'Sage 100 XRT Solution',
      description: 'Pour les entreprises de plus de 200 salariés, des solutions pour vous accompagner à chaque étape de votre gestion financière et adopter une gestion optimale de votre trésorerie.',
      iconColor: 'orange'
    }
  ];

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
      const placeholder = img.parentElement?.querySelector('.image-placeholder');
      if (placeholder) {
        (placeholder as HTMLElement).classList.remove('hidden');
        (placeholder as HTMLElement).classList.add('flex');
      }
    }
  }
}
