import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllatainkComponent } from './allataink/allataink.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';
import { UjAllatComponent } from './uj-allat/uj-allat.component';

const routes: Routes = [
  { path: '', component: NyitoOldalComponent },
  { path: 'allataink', component: AllatainkComponent},
  { path: 'ujallat', component: UjAllatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
