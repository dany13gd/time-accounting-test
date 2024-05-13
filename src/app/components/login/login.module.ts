import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '../store/reducers';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
