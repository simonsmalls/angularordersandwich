import { Component } from '@angular/core';
import {Session} from "../../models/session";
import {Person} from "../../models/person";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";
import {PassingService} from "../../service/passing.service";
import {Router} from "@angular/router";
import {SandwichTypeService} from "../../service/sandwich-type.service";
import {SandwichType} from "../../models/sandwichType";
import {ButtonType, TableConfig} from "../../shared/table/models/table-config.model";
import {Entity} from "../../models/entity.model";
import {OrderTodayService} from "../../service/order-today.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  sandwichTypes:Array<SandwichType>;
  categories:Array<string>=[];
  person:Person;
  tableConfig: TableConfig;
  ordering:boolean=false;
  id:number;
  shopId:number;
  panelOpenState:boolean;



  entityForm: FormGroup;

  constructor(
    private sandwichTypeService: SandwichTypeService,
    private passingService: PassingService,
    private orderTodayService:OrderTodayService,
    private fb:FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.orderTodayService.getOrderToday().subscribe((c)=>{
      this.sandwichTypeService.getSandwichTypes(c.shop.id).subscribe((cat)=> {
        this.sandwichTypes=cat;
        this.getCategories(cat);


      })

    })




    this.person=this.passingService.person;




  }
  getCategories( sandwichTypes:Array<SandwichType>){
    for(let type of sandwichTypes) {
      if (!this.categories.includes(type.category)){
        this.categories.push(type.category)
      }
    }
  }

  filterByCat(category):Array<SandwichType>{
    let list=[]
    for(let type of this.sandwichTypes){
      if(type.category==category){
        list.push(type)
      }
    }

    return list;
  }

  switchOrder(){
    if (this.ordering==true){
      this.ordering=false
      console.log("ordering false")
    }else{
      this.ordering=true
      console.log("ordering true")

    }
  }
  order(id:number){
    this.id=id;
  }

}
