import { Component } from '@angular/core';
import {Session} from "../../models/session";
import {Person} from "../../models/person";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";
import {PassingService} from "../../service/passing.service";
import {Router} from "@angular/router";
import {SandwichTypeService} from "../../service/sandwich-type.service";
import {SandwichType} from "../../models/sandwichType";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  sandwichTypes:Array<SandwichType>;
  person:Person;



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
    this.entityForm=this.fb.group({
      session: [null,Validators.required],
      name: [null,Validators.required],


    })

     */
  }

}
