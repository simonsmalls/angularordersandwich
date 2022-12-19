import {Component, OnInit} from '@angular/core';
import {Session} from "../../models/session";
import {Person} from "../../models/person";
import {SessionService} from "../../service/session.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter} from "rxjs";
import {Router} from "@angular/router";
import {PassingService} from "../../service/passing.service";
import {OrderTodayService} from "../../service/order-today.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {


  sessions:Array<Session>;
  persons:Array<Person>;
  session:Session;
  person:Person;
  entityForm: FormGroup;

  constructor(
    private sessionService: SessionService,
    private orderTodayService: OrderTodayService,
    private passingService: PassingService,
    private fb:FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.sessionService.getSessionsToday().subscribe((cat)=> {
      this.sessions=cat;

    })
    this.entityForm=this.fb.group({
      session: [null,Validators.required],
      name: [null,Validators.required],


    })
  }
  setSession(){
    console.log("in session set")

    let id=this.entityForm.get('session').value;

    for(let session of this.sessions){
      if(session.id==id){

        this.session=session;
        break
      }
    }


    this.persons=this.session.personList;


  }

  setPerson(){

    let id=this.entityForm.get('name').value;

    for(let person of this.persons){
      if(person.id==id){

        this.person=person;
        this.passingService.person=person;
        break
      }
    }

  }

  order(){
    this.router.navigate(['/order/order'])
  }

  noOrder() {
    this.orderTodayService.noOrder(this.person);
  }

}
