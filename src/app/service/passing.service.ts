import { Injectable } from '@angular/core';
import {Person} from "../models/person";
import {OrderTodayService} from "./order-today.service";

@Injectable({
  providedIn: 'root'
})
export class PassingService {
  personId:number;
  person:Person;
  shopId:number;

  constructor(private orderTodayService:OrderTodayService) {
    this.orderTodayService.getOrderToday().subscribe((c)=>{
      this.shopId=c.shop.id;
      console.log(this.shopId)
    })
  }
}
