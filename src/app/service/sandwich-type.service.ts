import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {HttpClient} from "@angular/common/http";
import {SandwichType} from "../models/sandwichType";

@Injectable({
  providedIn: 'root'
})
export class SandwichTypeService {
  url:string='http://localhost:8080/ordersandwich/api/sandwich'

  constructor(   protected http: HttpClient,) { }

  getSandwichTypes(id:number): Observable<Array<SandwichType>>
  {

    return this.http.get<Array<SandwichType>>(this.url + '/shop/'+ id  );
  }
}
