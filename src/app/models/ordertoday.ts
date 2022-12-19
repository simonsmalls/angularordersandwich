import {SandwichOrder} from "./sandwich-order";
import {Shop} from "./shop";

export class Ordertoday {

    id:number;


    order:Array<SandwichOrder>;

    totalPrice:number;

   shop:Shop;

   date:Date;

   closingTime:string;
}
