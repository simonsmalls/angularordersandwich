import { Injectable } from '@angular/core';
import {Shop} from "../models/shop";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shops: Shop[];
  url:string='http://localhost:8080/ordersandwich/api/shop/'

  constructor(protected httpClient: HttpClient) {
  }

  getShops(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(this.url);;
  }

}
