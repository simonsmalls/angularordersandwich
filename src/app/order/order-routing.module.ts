import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order/order.component";
import {PersonOrderComponent} from "./person-order/person-order.component";

const routes: Routes = [

  { path: 'order', component: OrderComponent },
  { path: ':id/order', component: PersonOrderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
