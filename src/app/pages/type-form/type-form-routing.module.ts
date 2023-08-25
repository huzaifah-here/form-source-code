import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeFormComponent} from "./type-form.component";

const routes: Routes = [
  {
    path: '',
    component: TypeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeFormRoutingModule { }
