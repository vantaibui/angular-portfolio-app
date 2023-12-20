import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatButtonModule, MatDividerModule, MatIconModule]
})
export class MaterialsModule {}
