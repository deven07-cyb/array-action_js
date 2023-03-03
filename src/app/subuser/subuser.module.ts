import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { SubuserRoutingModule } from './subuser-routing.module';
import { SubuserdashboardComponent } from './subuserdashboard/subuserdashboard.component';


@NgModule({
  declarations: [
    SubuserdashboardComponent
  ],
  imports: [
    CommonModule,
    SubuserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class SubuserModule { }
