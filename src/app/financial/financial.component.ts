import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {async, Observable} from "rxjs";
import {FinanceDto} from "../models/finance-dto";
import {parse} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {Shop} from "../models/shop";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit{

  yearMonth: string;
  financeDto: FinanceDto;
//  shopList: Observable<{ id: number; name: string }[]>;

//  shops: Shop[];
//  selectedShop: Shop;
  selectedShop: number;
  summary: string;
  averagePrice: number;
  averageShopPrice;
  shops: Observable<Shop[]>;

  setSelectedShop(){
  }

  setYearMonth(yyyyxMM: string){
    let year: number = parseInt(yyyyxMM.substring(0, 4));
    console.log(year);
    let month: number = parseInt(yyyyxMM.substring(5, 7));
    console.log(month);
    this.financeDto.year = year;
    console.log(this.financeDto.year);
    this.financeDto.month = month;
    console.log(this.financeDto.month);

  }

  financialSummary(){
    this.financeDto.shop = this.selectedShop; //.id;
    console.log(this.financeDto.shop);
    console.log(this.yearMonth);
    console.log(typeof this.yearMonth);
    this.setYearMonth(this.yearMonth);
    this.httpClient.post<number>('http://localhost:8080/ordersandwich/api/finance/monthlyprice', this.financeDto)
      .subscribe((c)=> this.averagePrice = c);
    console.log(this.averagePrice);
    this.summary = 'Total price of all orders at all shops this month: ' + this.averagePrice;
    // 'Average price of a sandwich this month at all shops: '
    console.log(this.summary);
  }

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
 //   this.shops = this.httpClient.get<{id: number, name: string}[]>('http://localhost:8080/ordersandwich/api/shop');
//    this.httpClient.get<Shop[]>('http://localhost:8080/ordersandwich/api/shop').subscribe((c) => this.shops = c);
    this.shops = this.httpClient.get<Shop[]>('http://localhost:8080/ordersandwich/api/shop');
    this.financeDto = new FinanceDto();
  }


}
