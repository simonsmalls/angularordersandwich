export class FinanceDto {

  private _shop: number;
  private _month: number;
  private _year: number;


  get shop(): number {
    return this._shop;
  }

  set shop(value: number) {
    this._shop = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }


}
