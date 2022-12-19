import {Component, OnInit} from '@angular/core';
import {OrderTodayService} from "../../service/order-today.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-no-orders',
  templateUrl: './no-orders.component.html',
  styleUrls: ['./no-orders.component.css']
})
export class NoOrdersComponent implements OnInit{
  persons:Array<Person>=[];

  constructor(private os:OrderTodayService) {
  }
  ngOnInit(): void {

     this.os.checkallorderPersons().subscribe((c)=>{
       this.persons=c;

     })
  }

}
