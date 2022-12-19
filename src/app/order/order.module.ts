import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import {AppTableModule} from "../shared/table/app-table.module";
import { OrderSandwichComponent } from './order-sandwich/order-sandwich.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OrderComponent,
    OrderSandwichComponent
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        AppTableModule,
        FormsModule
    ]
})
export class OrderModule { }
