import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { coinModel } from 'src/app/models/coin.model';
import { CoinsListService } from 'src/app/services/coins-list.service';
import { MoreDataService } from 'src/app/services/more-data.service';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements OnInit {
  


  constructor(public coinsListService: CoinsListService,) {
  }


  ngOnInit(): void {
    this.coinsListService.getCouis();

  }
  
}




