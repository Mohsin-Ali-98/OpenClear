import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { AgGridModule } from 'ag-grid-angular';
import { CreateOrderModule } from '../../create-order/create-order.module';
import { FormsModule } from '@angular/forms';
import { ManageOrderModule } from '../manage-order.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
  ]
  
})
export class EditOrderModule { }
