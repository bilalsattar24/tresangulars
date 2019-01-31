import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'; //convert to dashboardComponent
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: ""  ,   redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent} //fix here too
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
