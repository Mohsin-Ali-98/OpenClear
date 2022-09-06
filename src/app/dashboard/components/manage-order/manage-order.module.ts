import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../../dashboard.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { EditbtnComponent } from './editbtn/editbtn.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';




@NgModule({
  declarations: [  
    // EditbtnComponent,EditOrderComponent
  
    EventEditComponent, EventDeleteComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AgGridModule,
    FormsModule
  ],
  exports:[AgGridModule , FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class ManageOrderModule { }
