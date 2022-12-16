import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SandwichTypeService {
  url:string='http://localhost:8080/ordersandwich/api/sandwich'

  constructor(   protected http: HttpClient,) { }

  getSessionsToday(id:number): Observable<Array<Session>>
  {

    return this.http.get<Array<Session>>(this.url + '/shop/'+ id  );
  }
}
