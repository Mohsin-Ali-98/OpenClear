import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../app/auth/auth/auth.module';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageOrderComponent } from './dashboard/components/manage-order/manage-order.component';
import { AssignAgentsComponent } from './dashboard/components/assign-agents/assign-agents.component';
import { PaymentRequestComponent } from './dashboard/components/payment-request/payment-request.component';
import { PaymentApprovalComponent } from './dashboard/components/payment-approval/payment-approval.component';
import { MapScreenComponent } from './dashboard/components/map-screen/map-screen.component';
import { NotificationsComponent } from './dashboard/components/notifications/notifications.component';
import { ConfigurationComponent } from './dashboard/components/configuration/configuration.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { CreateOrderComponent } from './dashboard/components/create-order/create-order.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { AuthguardServiceService } from './authguard-service.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    DashboardRoutingModule,
    AgGridModule,
    NgbModule,
    
  ],
  providers: [
    AuthguardServiceService,
  ],
  bootstrap: [AppComponent],
  exports:[
    DashboardComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class AppModule { }
