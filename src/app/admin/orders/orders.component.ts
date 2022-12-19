import {Component, OnInit} from '@angular/core';
import {OrderTodayService} from "../../service/order-today.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  order:string[];

  constructor(private os:OrderTodayService) {
  }
  ngOnInit(): void {

    this.os.orderTodayToString().subscribe((c)=>{
      this.order=c.string.split('\n');

    })
  }

}
