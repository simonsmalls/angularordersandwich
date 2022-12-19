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
    console.log(" greens "  +this.greens)
    console.log("grilled greens "  +this.grilledGreens)


  }

  getGrilledGreens(){

    this.greens=false;
    this.grilledGreens=true;

    console.log(" greens "  +this.greens)
    console.log("grilled greens "  +this.grilledGreens)


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
    order.i=this.id;
    order.rauwkost=this.greens;
    order.grilledVegs=this.grilledGreens;
    order.white=this.white;
    order.note=comment;
    order.person=this.person;


  }





}
