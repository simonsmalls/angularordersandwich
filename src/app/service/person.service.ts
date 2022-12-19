import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../models/person";
import {HttpClient} from "@angular/common/http";
import {SandwichOrder} from "../models/sandwich-order";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url:string='http://localhost:8080/ordersandwich/api/persons/'

  constructor(protected httpClient: HttpClient) { }

  allPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url);
  }

  add(person: Person) {
    return this.httpClient.post(this.url + "add", person);
  }

  delete(person: Person){
    return this.httpClient.request('delete', this.url, {body: person});
  }

  deleteById(id: number){
    return this.httpClient.delete(this.url + id);
  }

/*  findByName(name: Name): Observable<Person> {
    return this.httpClient.post(this.url + "name", name);
  } */

  findById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.url + "id");
  }


}
