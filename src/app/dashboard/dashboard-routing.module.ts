import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignAgentsComponent } from './components/assign-agents/assign-agents.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { DashboardComponent } from './dashboard.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PaymentApprovalComponent } from './components/payment-approval/payment-approval.component';
import { PaymentRequestComponent } from './components/payment-request/payment-request.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { DashComponent } from './components/dash/dash.component';
import { AuthenticationGuard } from '../authentication.guard';
import { DashroutesauthGuard } from './dashroutesauth.guard';
import { EditOrderComponent } from './components/manage-order/edit-order/edit-order.component';
import { AgentComponent } from './components/configuration/agent/agent.component';
import { MaterialsComponent } from './components/configuration/materials/materials.component';
import { SupplierComponent } from './components/configuration/supplier/supplier.component';
import { BankComponent } from './components/configuration/bank/bank.component';
import { AlertComponent } from './components/configuration/alert/alert.component';
import { UsersComponent } from './components/configuration/users/users.component';
import { ConfigurationGuard } from './components/configuration/configuration.guard';
import { LocationComponent } from './components/configuration/location/location.component';

// const routes: Routes = [

    

// {path: '', component: DashboardComponent, children: [
  
//     {path: '', component: DashComponent},
   
  
// ]}
// ]

const routes: Routes = [

  {
    path:'',
    component:DashboardComponent, canActivate:[AuthenticationGuard],
    children:[
      {
        path:"dash", component:DashComponent,canActivateChild:[DashroutesauthGuard]
      },
      {
        path:"configuration",
        component:ConfigurationComponent,
        children:[
          {
          path:'agent' , component:AgentComponent,
          },
          {
            path:'material' , component:MaterialsComponent,
          },
          {
            path:'supplier' , component:SupplierComponent ,
          },{
            path:"location" , component:LocationComponent,
          },{
            path:'bank' , component:BankComponent , 
          },{
            path:'alert' , component:AlertComponent , 
          },{
            path:"user" , component:UsersComponent ,
          }
        ]
      },
      {
        path:"manageorder",
        component:ManageOrderComponent,canActivateChild:[DashroutesauthGuard]
      },
      {
        path:"dash", component:DashComponent,canActivateChild:[DashroutesauthGuard]
      },
      {
        path:"mapscreen",
        component:MapScreenComponent,canActivateChild:[DashroutesauthGuard]
      },{
        path:"notifications",
        component:NotificationsComponent,canActivateChild:[DashroutesauthGuard]
      },{
        path:"paymentapproval",
        component:PaymentApprovalComponent,canActivateChild:[DashroutesauthGuard]
      },{
        path:"paymentrequest",
        component:PaymentRequestComponent,canActivateChild:[DashroutesauthGuard]
      },{
        path:"createorder",
        component:CreateOrderComponent,canActivateChild:[DashroutesauthGuard]
      }
      ,{
        path:"assignagents",
        component:AssignAgentsComponent,canActivateChild:[DashroutesauthGuard]
      },
      {
        path:"editorder",
        component:EditOrderComponent,canActivateChild:[DashroutesauthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
