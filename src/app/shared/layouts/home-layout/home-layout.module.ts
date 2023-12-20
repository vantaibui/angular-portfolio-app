import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';

import { MaterialsModule } from '../../materials/materials.module';



@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [HomeLayoutComponent]
})
export class HomeLayoutModule { }
