import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../../dashboard.module';
// import { ModalComponent } from './modal/modal.component';
import { AgGridModule } from 'ag-grid-angular';
// import { PopupComponent } from '../manage-order/popup/popup.component';



@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    DashboardModule,
    AgGridModule,
  ],
  // exports:[AgGridModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class CreateOrderModule { }