import {Component, OnInit} from '@angular/core';
import {OrderTodayService} from "../../service/order-today.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  constructor(private os:OrderTodayService) {
  }
  ngOnInit(): void {

  //  this.os.
  }

}
