import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { PresentationComponent } from './features/presentation/presentation.component';
import { QuiSommesNousComponent } from './features/presentation/qui-sommes-nous/qui-sommes-nous.component';
import { SavoirFaireComponent } from './features/presentation/savoir-faire/savoir-faire.component';
import { EquipeTechniqueComponent } from './features/presentation/equipe-technique/equipe-technique.component';

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
  }
];
