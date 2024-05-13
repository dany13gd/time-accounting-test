import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  LoginPage } from './login/login.page';

import { ComponentsRoutingModule} from './components-routing.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
  ],
  declarations: [LoginPage, HomeComponent]
})
export class ComponentsModule {}
