import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleFormRoutingModule } from './simpleform-routing.module';
import { SimpleFormComponent } from './simpleform.component';

@NgModule({
  declarations: [SimpleFormComponent],
  imports: [CommonModule, SimpleFormRoutingModule, FormsModule],
})
export class SimpleFormModule {}
