import { Routes } from '@angular/router';
import { CleanersListComponent } from './cleaners-list/cleaners-list.component';

export const CLEANERS_ROUTES: Routes = [
  {
    path: 'cleaners-list',
    component: CleanersListComponent,
  },
];
