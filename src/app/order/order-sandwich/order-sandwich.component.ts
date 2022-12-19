import { Component } from '@angular/core';

@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.css']
})
export class OrderSandwichComponent {

  greens:boolean=false;
  grilledGreens:boolean=false;
  white:boolean=false;
  note:string;

  getGreens(){
    if(this.greens){
      this.greens=false;
    }else {
      this.greens=true;
    }
    console.log(this.greens)
  }

}
