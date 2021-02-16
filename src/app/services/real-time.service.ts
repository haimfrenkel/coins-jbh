import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { coinModel } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class RealTimeService {

  private realTime: BehaviorSubject<string[]>;
  private _realTime: string[];
  constructor() {
    this._realTime = [];
    this.realTime =  new BehaviorSubject<string[]>([]);
   }

   add (c:string): void{
    this._realTime = [...this._realTime,c]
    this.realTime.next(this._realTime);
    }

    get (): Observable<string[]>{
      return this.realTime;
    }
     
   
    reduce(id: string): void{
      this._realTime.splice(this._realTime.indexOf(id), 1);
      this.realTime.next(this._realTime);
    }
  
}
