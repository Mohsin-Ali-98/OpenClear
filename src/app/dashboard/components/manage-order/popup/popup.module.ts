import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PopupComponent } from './popup.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AppModule } from 'src/app/app.module';
import { CreateOrderModule } from '../../create-order/create-order.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateOrderModule,
    DashboardModule,
    AgGridModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class PopupModule { }
