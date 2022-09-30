import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAuthguardService } from '../../dash-authguard.service';
import { AgentComponent } from './agent/agent.component';
import { AlertComponent } from './alert/alert.component';
import { BankComponent } from './bank/bank.component';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationGuard } from './configuration.guard';
import { MaterialsComponent } from './materials/materials.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{
  path:'configuration',
  component:ConfigurationComponent, canActivate:[DashAuthguardService],
  children:[
    {
    path:'agent' , component:AgentComponent,canActivate:[ConfigurationGuard]
    },
    {
      path:'material' , component:MaterialsComponent,canActivate:[ConfigurationGuard]
    },
    {
      path:'supplier' , component:SupplierComponent , canActivate:[ConfigurationGuard]
    },{
      path:"location" , component:Location, canActivate:[ConfigurationGuard]
    },{
      path:'bank' , component:BankComponent , canActivate:[ConfigurationGuard]
    },{
      path:'alert' , component:AlertComponent , canActivate:[ConfigurationGuard]
    },{
      path:"user" , component:UsersComponent , canActivate:[ConfigurationGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
