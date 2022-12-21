import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PassingService} from "../../service/passing.service";
import {Person} from "../../models/person";
import {OrderTodayService} from "../../service/order-today.service";
import {SandwichOrder} from "../../models/sandwich-order";
import {MatTableDataSource} from "@angular/material/table";
import {SandwichType} from "../../models/sandwichType";

@Component({
  selector: 'app-person-order',
  templateUrl: './person-order.component.html',
  styleUrls: ['./person-order.component.css']
})
export class PersonOrderComponent implements OnInit{
  id:number;
  person:Person;
  orders:SandwichOrder[]=[];
  dataSource = new MatTableDataSource<SandwichOrder>();
  displayedColumns: string[] = ['name','delete'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private passing:PassingService,
    private os:OrderTodayService,
    ) {



  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.person=this.passing.person;

    this.os.check(this.person).subscribe((c)=>{
      this.orders=c
      this.dataSource.data=c;


      }
    )


  }

   async deleteOrder(order:SandwichOrder){

     this.os.remove(order).subscribe((c)=>{
       this.os.check(this.person).subscribe((c)=>{
          this.orders=c
          this.dataSource.data=c;


        }
      )
    });




  }

}
