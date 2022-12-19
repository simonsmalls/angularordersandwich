import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {HttpClient} from "@angular/common/http";
import {SandwichType} from "../models/sandwichType";

@Injectable({
  providedIn: 'root'
})
export class SandwichTypeService {

  url:string='http://localhost:8080/ordersandwich/api/sandwich/'

  constructor(   protected http: HttpClient,) { }


  getSandwichTypes(id:number): Observable<Array<SandwichType>> {
    return this.http.get<Array<SandwichType>>(this.url + 'shop/'+ id  );
  }




}
/* TODO
@GetMapping("{id}")
public ResponseEntity<?> findSandwichTypeById(@PathVariable int id) throws SandwichTypeNotFoundException {
  SandwichType sandwichType = sandwichTypeService.findSandwichTypeById(id);
  return new ResponseEntity<>(sandwichType, HttpStatus.OK);
}

@GetMapping("query")
public ResponseEntity<?> findSandwichType(@RequestParam("name") String name, @RequestParam("shopid") int shopId) throws SandwichTypeNotFoundException, ShopNotFoundException {
  SandwichType sandwichType = sandwichTypeService.findSandwichType(name, shopId);
  return new ResponseEntity<>(sandwichType, HttpStatus.OK);
}

@DeleteMapping("{id}")
public void removeSandwichType(@PathVariable int id) throws SandwichTypeNotFoundException {
  sandwichTypeService.removeSandwichType(id);
}

@PostMapping("")
public void addSandwichType(@RequestBody SandwichType sandwichType) throws SandwichTypeAlreadyExistsException {
  sandwichTypeService.addSandwichType(sandwichType);
}

@GetMapping("")
public ResponseEntity<?> getSandwichTypes() {
  List<SandwichType> sandwichTypes = sandwichTypeService.getSandwichTypes();
  return new ResponseEntity<>(sandwichTypes, HttpStatus.OK);
}
*/
