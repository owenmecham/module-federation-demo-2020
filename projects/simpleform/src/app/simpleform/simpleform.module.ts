import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleFormRoutingModule } from './simpleform-routing.module';
import { SimpleFormComponent } from './simpleform.component';

@NgModule({
  declarations: [SimpleFormComponent],
  imports: [CommonModule, SimpleFormRoutingModule],
})
export class SimpleFormModule {}
