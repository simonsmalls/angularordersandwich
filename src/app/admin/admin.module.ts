import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrdersComponent } from './orders/orders.component';
import { NoOrdersComponent } from './no-orders/no-orders.component';


@NgModule({
  declarations: [

    AdminHomeComponent,
     OrdersComponent,
     NoOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
