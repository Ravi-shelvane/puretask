import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccPassComponent } from './acc-pass/acc-pass.component';
import { AccTypeComponent } from './acc-type/acc-type.component';

const routes: Routes = [
  {
    path:'create-pass', component:AccPassComponent
  },
  {
    path:'acc-type',component:AccTypeComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
