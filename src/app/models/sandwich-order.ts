import {SandwichType} from "./sandwichType";
import {Person} from "./person";



export class SandwichOrder {

  id:number;

    sandwichType:SandwichType;
    rauwkost:boolean;
    grilledVegs:boolean;

    white:boolean;
    note:string;

  person:Person;
}
