import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coinModel } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class CoinsListService {
  coinsArr: coinModel[] = [];
  baseUrl = "https://api.coingecko.com/api/v3/coins/list";

  
  constructor(private httpClient: HttpClient) {  }
  get(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
  getCouis(): void {
    this.get().subscribe(data => {
      this.coinsArr = data.slice(1, 100)
    });
  };
  
}
