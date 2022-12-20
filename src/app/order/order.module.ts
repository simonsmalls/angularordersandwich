import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import {AppTableModule} from "../shared/table/app-table.module";
import { OrderSandwichComponent } from './order-sandwich/order-sandwich.component';
import {FormsModule} from "@angular/forms";
import { PersonOrderComponent } from './person-order/person-order.component';
import {MaterialModule} from "../shared/material/material.module";


@NgModule({
  declarations: [
    OrderComponent,
    OrderSandwichComponent,
    PersonOrderComponent
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        AppTableModule,
        FormsModule,
        MaterialModule
    ]
})
export class OrderModule { }
