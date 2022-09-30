import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { AssignAgentsComponent } from './components/assign-agents/assign-agents.component';
import { PaymentRequestComponent } from './components/payment-request/payment-request.component';
import { PaymentApprovalComponent } from './components/payment-approval/payment-approval.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { DashComponent } from './components/dash/dash.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ModalComponent, ModalModule } from 'angular-custom-modal';
// import { PopupComponent } from './components/manage-order/popup/popup.component';
import { DashAuthguardService } from './dash-authguard.service';
import { DashroutesauthGuard } from './dashroutesauth.guard';
import { PopupComponent } from './components/manage-order/popup/popup.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { EditOrderComponent } from './components/manage-order/edit-order/edit-order.component';
import { EditbtnComponent } from './components/manage-order/editbtn/editbtn.component';
import { EventDeleteComponent } from './components/manage-order/event-delete/event-delete.component';
import { EventEditComponent } from './components/manage-order/event-edit/event-edit.component';
import { ConfigurationGuard } from './components/configuration/configuration.guard';
import { AgentComponent } from './components/configuration/agent/agent.component';
import { MaterialsComponent } from './components/configuration/materials/materials.component';
import { SupplierComponent } from './components/configuration/supplier/supplier.component';
import { LocationComponent } from './components/configuration/location/location.component';
import { BankComponent } from './components/configuration/bank/bank.component';
import { Alert } from 'selenium-webdriver';
import { AlertComponent } from './components/configuration/alert/alert.component';
import { UsersComponent } from './components/configuration/users/users.component';
// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ ManageOrderComponent,
    AssignAgentsComponent,
    PaymentRequestComponent,
    PaymentApprovalComponent,
    MapScreenComponent,
    NotificationsComponent,
    ConfigurationComponent,
    DashComponent,
    CreateOrderComponent,
    PopupComponent,
    EditOrderComponent,
    EditbtnComponent,
    EventEditComponent,
    AgentComponent,
    MaterialsComponent,
    SupplierComponent,
    LocationComponent,
    BankComponent,
    AlertComponent,
    UsersComponent

    
    // EventDeleteComponent
  ],
  providers:[
    DashroutesauthGuard,
    ConfigurationGuard
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    // NgSelectModule
    
  ],  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
