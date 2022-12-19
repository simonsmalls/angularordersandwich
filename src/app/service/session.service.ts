import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url:string='http://localhost:8080/ordersandwich/api/session/'


  constructor(
    protected http: HttpClient,
  ) {}

  getSessions(): Observable<Array<Session>> {
    return this.http.get<Array<Session>>(this.url );
  }

  getSessionsToday(): Observable<Array<Session>> {
    return this.http.get<Array<Session>>(this.url + 'today'  );
  }

  findSessionsDuring(fromDate: string, untilDate: string): Observable<Session[]> {
    let httpParams = new HttpParams();
    httpParams.set('from', fromDate);
    httpParams.set('until', untilDate);
    return this.http.get<Session[]>(this.url + 'query', {params: httpParams});
  }

  findSessionById(id: number): Observable<Session> {
    return this.http.get<Session>(this.url + id  );
  }

  //use this for existing persons.
  addPersonToSessionById(sessionId: number, personId: number) {
    let httpParams = new HttpParams();
    httpParams.set('personid', personId);
    return this.http.post(this.url + sessionId + '/subscribe', null);
  }

  removePersonFromSession(sessionId: number, personId: number) {
    let httpParams = new HttpParams();
    httpParams.set('personid', personId);
    return this.http.post(this.url + sessionId + '/unsubscribe', null);
  }

  getPersonsInSession(session: Session): Observable<Person[]> {
    let httpParams = new HttpParams();
    return this.http.post<Person[]>(this.url + 'persons', session);
  }

  getPersonsInSessionById(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(this.url + id + '/persons');
  }

  addSession(session: Session): Observable<Session> {
    return this.http.post<Session>(this.url, session);
  }

  removeSession(id: number): Observable<Session> {
    return this.http.delete<Session>(this.url + id);
  }

}




/*    Not added yet (probably not needed):


        @PostMapping("name")
    public Session findByName(@RequestBody Name name ) throws  SessionNotFoundException {
        return service.findSessionsByName(name.getName()).stream()
                .sorted(Comparator.comparing(Session::getEndDate).reversed())
                .findFirst().orElseThrow(SessionNotFoundException::new);
    }

    @PostMapping("add")
    public void addPersonToSession2(@RequestBody AddToSessionModel model ) throws SessionNotFoundException, PersonAlreadyInSessionException, NullInputException {
         service.addPersonToSession(model.getSession(),model.getPerson());
    }

    //add a new person to the database (or find if exists), and subscribe to session.
    @PostMapping("{sessionid}/newperson")
    public void addPersonToSession(@PathVariable("sessionid") int sessionId, @RequestBody Person person) throws SessionNotFoundException, PersonAlreadyInSessionException, NullInputException, PersonNotFoundException {
        service.addPersonToSession(service.findSession(sessionId), person);
    }
 */
