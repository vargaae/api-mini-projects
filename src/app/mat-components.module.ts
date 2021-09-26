import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule
  ]
})
export class MatComponentsModule { }
