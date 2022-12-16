import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url:string='http://localhost:8080/ordersandwich/api/session'


  constructor(
    protected http: HttpClient,
  )
  {


  }

  getSessions(): Observable<Array<Session>>
  {

    return this.http.get<Array<Session>>(this.url );
  }

  getSessionsToday(): Observable<Array<Session>>
  {

    return this.http.get<Array<Session>>(this.url + '/today'  );
  }
}
