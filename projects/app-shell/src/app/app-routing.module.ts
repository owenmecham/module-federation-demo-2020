import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'cleaners',
    loadChildren: () => import('cleaners/Module').then((m) => m.CleanersModule),
  },
  {
    path: 'simpleform',
    loadChildren: () =>
      import('simpleform/Module').then((m) => m.SimpleFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
