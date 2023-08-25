import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule
  ]
})
export class CustomLayoutModule { }
