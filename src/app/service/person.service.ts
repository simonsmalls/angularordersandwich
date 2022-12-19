import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../models/person";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url:string='http://localhost:8080/ordersandwich/api/persons'

  constructor(protected httpClient: HttpClient) { }

  allPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url);
  }

}
