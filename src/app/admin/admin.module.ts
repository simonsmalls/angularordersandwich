import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrdersComponent } from './orders/orders.component';
import { NoOrdersComponent } from './no-orders/no-orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../shared/material/material.module";


@NgModule({
  declarations: [

    AdminHomeComponent,
     OrdersComponent,
     NoOrdersComponent,
     NewOrderComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatSelectModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class AdminModule { }
