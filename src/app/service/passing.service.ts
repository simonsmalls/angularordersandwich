import { Injectable } from '@angular/core';
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PassingService {
  personId:number;
  person:Person;

  constructor() { }
}
