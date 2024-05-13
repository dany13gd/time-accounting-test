import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '../store/reducers';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
