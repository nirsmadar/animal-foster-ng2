import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FosterDetailsComponent } from './fosters/foster-details/foster-details.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
