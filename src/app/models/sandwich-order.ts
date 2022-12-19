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

  toString() {
    let str: string = this.sandwichType.name;

    if (this.white) {
      str += ' wit'
    } else {
      str += ' grijs '
    }
    if (this.rauwkost) {
      str += " met groenten "
    }
    if (this.grilledVegs) {
      str += " met gegrilde groenten "
    }
      str+= this.note;
    return str;

  }


}
