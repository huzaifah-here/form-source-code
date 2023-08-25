import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomLayoutComponent} from "./custom-layout/custom-layout.component";
import {TypeFormComponent} from "./pages/type-form/type-form.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/type-form/type-form.module').then(m => m.TypeFormModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
