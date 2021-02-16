import { Component, Input, OnInit } from '@angular/core';
import { coinModel } from 'src/app/models/coin.model';
import { RealTimeService } from 'src/app/services/real-time.service';



@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {
  realTimeList: string[];

  constructor(public realTimeService: RealTimeService) {
   
  }

  ngOnInit(): void {
    this.realTimeService.get().subscribe(res => {this.realTimeList = res});

  }

}
