import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { PresentationComponent } from './features/presentation/presentation.component';
import { QuiSommesNousComponent } from './features/presentation/qui-sommes-nous/qui-sommes-nous.component';
import { SavoirFaireComponent } from './features/presentation/savoir-faire/savoir-faire.component';
import { EquipeTechniqueComponent } from './features/presentation/equipe-technique/equipe-technique.component';
import { ServicesComponent } from './features/services/services.component';
import { IntegrateurSolutionComponent } from './features/services/integrateur-solution/integrateur-solution.component';
import { InstallationReseauComponent } from './features/services/installation-reseau/installation-reseau.component';
import { DeveloppementComponent } from './features/services/developpement/developpement.component';
import { FormationComponent } from './features/services/formation/formation.component';
import { PartenaireComponent } from './features/partenaire/partenaire.component';
import { Sage100PaieRhComponent } from './features/produits/sage-100-paie-rh/sage-100-paie-rh.component';
import { SageXrtSolutionComponent } from './features/produits/sage-xrt-solution/sage-xrt-solution.component';
import { SageFrp1000Component } from './features/produits/sage-frp1000/sage-frp1000.component';
import { BiReportingComponent } from './features/produits/bi-reporting/bi-reporting.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'presentation',
    component: PresentationComponent,
    children: [
      {
        path: '',
        redirectTo: 'qui-sommes-nous',
        pathMatch: 'full'
      },
      {
        path: 'qui-sommes-nous',
        component: QuiSommesNousComponent
      },
      {
        path: 'savoir-faire',
        component: SavoirFaireComponent
      },
      {
        path: 'equipe-technique',
        component: EquipeTechniqueComponent
      }
    ]
  },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'integrateur-solution',
        pathMatch: 'full'
      },
      {
        path: 'integrateur-solution',
        component: IntegrateurSolutionComponent
      },
      {
        path: 'installation-reseau',
        component: InstallationReseauComponent
      },
      {
        path: 'developpement',
        component: DeveloppementComponent
      },
      {
        path: 'formation',
        component: FormationComponent
      }
    ]
  },
  {
    path: 'partenaire',
    component: PartenaireComponent
  },
  {
    path: 'produits/sage-100-paie-rh',
    component: Sage100PaieRhComponent
  },
  {
    path: 'produits/sage-xrt-solution',
    component: SageXrtSolutionComponent
  },
  {
    path: 'produits/sage-frp1000',
    component: SageFrp1000Component
  },
  {
    path: 'produits/bi-reporting',
    component: BiReportingComponent
  }
];
