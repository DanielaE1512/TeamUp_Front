import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResenaListComponent } from './resena-list/resena-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ResenaListComponent],
  declarations: [ResenaListComponent]
})
export class ResenaModule { }
