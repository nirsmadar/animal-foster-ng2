import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FosterDetailsComponent }  from './foster-details/foster-details.component';

const fostersRoutes: Routes = [
  { path: 'foster/:id', component: FosterDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(fostersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FosterRoutingModule { }
