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
    PopupComponent
  ],
  providers:[
    DashroutesauthGuard
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule
  ],  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
