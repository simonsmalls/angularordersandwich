import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FinanceDto} from "../models/finance-dto";
import {parse} from "@angular/compiler-cli/linker/babel/src/babel_core";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit{

  yearMonth: string;
  financeDto: FinanceDto;
  shops: Observable<{ id: number; name: string }[]>;
  summary: string = "";
  averagePrice;
  averageShopPrice;

  setSelectedShop(id: number){
    this.financeDto.shop = id;
  }

  setYearMonth(yyyyxMM: string){
    let year: number = parseInt(yyyyxMM[0-3]);
    let month: number = parseInt(yyyyxMM[5-6]);
    this.financeDto.year = year;
    this.financeDto.month = month;
  }

  financialSummary(){
    this.setYearMonth(this.yearMonth);
    this.averagePrice = this.httpClient.post<number>('http://localhost:8080/ordersandwich/api/finance/monthlyprice', this.financeDto);
    this.summary = 'Average price' + this.averagePrice;
  }

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
    this.shops = this.httpClient.get<{id: number, name: string}[]>('http://localhost:8080/ordersandwich/api/shop');
    this.financeDto = new FinanceDto();
  }


}
