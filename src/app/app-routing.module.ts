import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'order', loadChildren: () => import('./order/order.module')
      .then((m) => m.OrderModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then((m) => m.AdminModule)
  },
  {path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
