import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {Ordertoday} from "../models/ordertoday";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class OrderTodayService {

  url:string='http://localhost:8080/ordersandwich/api/order'


  constructor(
    protected http: HttpClient,
  )
  {


  }

  getOrderToday(): Observable<Ordertoday>
  {

    return this.http.get<Array<Session>>(this.url );
  }

  noOrder(person:Person){
    return this.http.post<Array<Session>>(this.url+"/none", person );
  }
}
