import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CleanersListComponent } from './cleaners-list/cleaners-list.component';
import { CLEANERS_ROUTES } from './cleaners.routes';

@NgModule({
  declarations: [CleanersListComponent],
  imports: [CommonModule, RouterModule.forChild(CLEANERS_ROUTES)],
})
export class CleanersModule {}
