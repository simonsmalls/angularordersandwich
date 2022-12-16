import {Component, OnInit} from '@angular/core';
import {Session} from "../../models/session";
import {Person} from "../../models/person";
import {SessionService} from "../../service/session.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {


  sessions:Array<Session>;
  persons:Array<Person>;
  session:Session;
  entityForm: FormGroup;

  constructor(
    private sessionService: SessionService,
    private fb:FormBuilder,

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

}
