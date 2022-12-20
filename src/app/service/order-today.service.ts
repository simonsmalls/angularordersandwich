import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {Ordertoday} from "../models/ordertoday";
import {Person} from "../models/person";
import {SandwichOrder} from "../models/sandwich-order";
import {SandwichOrderModel} from "../models/sandwich-order-model";
import {Str} from "../models/str";

@Injectable({
  providedIn: 'root'
})
export class OrderTodayService {

  url:string='http://localhost:8080/ordersandwich/api/order'


  constructor(
    protected http: HttpClient,
  ) {}

  getOrderToday(): Observable<Ordertoday> {
    return this.http.get<Ordertoday>(this.url );
  }

  noOrder(person: Person){
    return this.http.post(this.url+"/none", person );
  }

  order(sandwichOrder: SandwichOrderModel){
    return this.http.post(this.url, sandwichOrder);
  }

  newOrderTomorrow(id: number){
    return this.http.post(this.url + "/new/tomorrow/" + id, null);
  }

  newOrderToday(id: number){
    return this.http.post(this.url + "/new/today/" + id, null);
  }

  check(person: Person): Observable<SandwichOrder[]>{
    return this.http.post<SandwichOrder[]>(this.url + "/check/person", person);
  }

  remove(sandwichOrder: SandwichOrder){
    return  this.http.request('delete', this.url, {body: sandwichOrder});
  }

  price(): Observable<number>
  {
    return this.http.get<number>(this.url + "/price");
  }

  send(id: number){
    return this.http.post(this.url + "/send/shop/" + id, null);
  }

  checkallorderString(): Observable<string>
  {
    return this.http.get<string>(this.url + "/check/all");
  }

  checkallorderPersons(): Observable<Person[]>
  {
    return this.http.get<Person[]>(this.url + "/check/allpersons");
  }

  orderTodayToString(): Observable<Str>
  {
    return this.http.get<Str>(this.url + "/string");
  }


}
