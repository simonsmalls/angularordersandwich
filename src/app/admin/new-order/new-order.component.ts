import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";
import {OrderTodayService} from "../../service/order-today.service";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit{

  shops: Shop[];
  nextShopId: number;
  entityForm: FormGroup;

  setShop(){
    this.nextShopId = this.entityForm.get('shop').value;
    console.log(this.nextShopId);
  }

  send(){
    console.log(this.nextShopId);
    this.orderTodayService.send(this.nextShopId).subscribe();
  }

  sendNewOrderToday(){
    this.send();
    this.newOrderToday();
  }

  newOrderToday(){
    this.orderTodayService.newOrderToday(this.nextShopId).subscribe();
  }

  newOrderTomorrow(){
    this.orderTodayService.newOrderTomorrow(this.nextShopId).subscribe();
  }

  constructor(
    protected shopService: ShopService,
    protected orderTodayService: OrderTodayService,
    protected formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(){
    this.shopService.getShops().subscribe((c) => {this.shops = c;});
    this.entityForm = this.formBuilder.group({shop: [null, Validators.required]});
  }

}
