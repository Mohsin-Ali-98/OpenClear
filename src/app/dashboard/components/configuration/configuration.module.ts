import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent/agent.component';
import { MaterialsComponent } from './materials/materials.component';
import { AgGridModule } from 'ag-grid-angular';
import { MaterailmodalComponent } from './materials/materailmodal/materailmodal.component';
import { SuppliermodalComponent } from './supplier/suppliermodal/suppliermodal.component';
import { LocationmodalComponent } from './location/locationmodal/locationmodal.component';
import { AlertmodalComponent } from './alert/alertmodal/alertmodal.component';
import { BankmodalComponent } from './bank/bankmodal/bankmodal.component';
import { UsersmodalComponent } from './users/usersmodal/usersmodal.component';

// import { ConfigurationRoutingModule } from '../configuration-routing.module';


@NgModule({
  declarations: [
  
    MaterailmodalComponent,
       SuppliermodalComponent,
       LocationmodalComponent,
       AlertmodalComponent,
       BankmodalComponent,
       UsersmodalComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ]
})
export class ConfigurationModule { }
