import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{path:"" , component :DashboardComponent, canActivate:[AuthenticationGuard]},
{path:"login" ,component:LoginComponent},
{path:"register", component: RegisterComponent},
{path: 'dashboard', component: DashboardComponent , canActivate:[AuthenticationGuard]} ,
// { path: '**', component: PageNotFoundComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
