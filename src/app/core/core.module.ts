import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';



@NgModule({
  declarations: [
    ToUppercasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
