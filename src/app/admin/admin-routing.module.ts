import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {NoOrdersComponent} from "./no-orders/no-orders.component";
import {OrdersComponent} from "./orders/orders.component";

const routes: Routes = [
  { path: 'home', component: AdminHomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'notordered', component: NoOrdersComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
