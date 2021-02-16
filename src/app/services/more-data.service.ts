import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoreDataService {

  baseUrl1 = "https://api.coingecko.com/api/v3/coins/"
  baseUrl2 = "?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false"
  constructor(private httpClient: HttpClient) { }
  
  get(id:string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl1}${id}${this.baseUrl2}`); 
  }
  
}
