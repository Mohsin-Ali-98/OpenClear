import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../../dashboard.module';
// import { ModalComponent } from './modal/modal.component';
// import { PopupComponent } from '../manage-order/popup/popup.component';



@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    DashboardModule,
  ],
  // exports:[AgGridModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class CreateOrderModule { }