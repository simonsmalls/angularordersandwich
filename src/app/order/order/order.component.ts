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

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  sandwichTypes:Array<SandwichType>;
  person:Person;
  tableConfig: TableConfig;
  ordering:boolean=false;
  id:number;



  entityForm: FormGroup;

  constructor(
    private sandwichTypeService: SandwichTypeService,
    private passingService: PassingService,
    private fb:FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.sandwichTypeService.getSandwichTypes(1).subscribe((cat)=> {
      this.sandwichTypes=cat;


    })


    this.person=this.passingService.person;




/*
    this.tableConfig = {
      columns: [
        {
          columnName: 'name',
          value: 'name'
        },
        {
          columnName: 'price',
          value: 'price'
        },



      ],
      actions: [
        {
          actionName: 'add to basket',
          actionCb: (product: Entity) => {



          },
          type: ButtonType.SUCCESS
        },
        {
          actionName: 'order',
          actionCb: (data: SandwichType) => {

            this.router.navigate(['/order', data.id, 'edit']);
          },
          type: ButtonType.SUBMIT
        },
      ],
      findDataCb: () => this.sandwichTypeService.getSandwichTypes(1),

    }


    /*
    this.entityForm=this.fb.group({
      session: [null,Validators.required],
      name: [null,Validators.required],


    })

     */
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
