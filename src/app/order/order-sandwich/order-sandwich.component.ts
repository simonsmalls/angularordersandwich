import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SandwichTypeService} from "../../service/sandwich-type.service";
import {PassingService} from "../../service/passing.service";
import {OrderTodayService} from "../../service/order-today.service";
import {Router} from "@angular/router";
import {SandwichOrderModel} from "../../models/sandwich-order-model";
import {Person} from "../../models/person";

@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.css']
})
export class OrderSandwichComponent implements OnInit {

  greens:boolean=false;
  grilledGreens:boolean=false;
  white:boolean=false;
  entityForm: FormGroup;
  ordered:boolean=false;
  @Input() id:number;
  @Input() person:Person;

  constructor(
    private sandwichTypeService: SandwichTypeService,
    private passingService: PassingService,
    private orderTodayService:OrderTodayService,
    private fb:FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  getGreens(){

    this.greens=true;
    this.grilledGreens=false;



  }

  getGrilledGreens(){

    this.greens=false;
    this.grilledGreens=true;




  }
  NoGreens(){

    this.greens=false;
    this.grilledGreens=false;




  }




  getWhite() {
    if (this.white) {
      this.white = false;
    } else {
      this.white = true;
    }


  }


  order(comment){
    let order=new SandwichOrderModel();
    order.i=this.id-1;
    order.rauwkost=this.greens;
    order.grilledVegs=this.grilledGreens;
    order.white=this.white;
    order.note=comment;
    order.person=this.person;

    this.orderTodayService.order(order).subscribe((c)=>{
      this.ordered=true;
    });



  }





}
