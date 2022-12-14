import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports: [
    LoginComponent, 
    RegisterComponent
  ]
})
export class AuthModule { }