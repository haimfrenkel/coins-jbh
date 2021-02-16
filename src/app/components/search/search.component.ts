import { Component, Input, OnInit } from '@angular/core';
import { coinModel } from 'src/app/models/coin.model';
import { CoinsListService } from 'src/app/services/coins-list.service';
import { MoreDataService } from 'src/app/services/more-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  coin: coinModel = null;
  finding = false;
  Answer = null;

  constructor(private coinsListService: CoinsListService, private moreDataService: MoreDataService) { }

  ngOnInit(): void {

  }
  search(symbol: string): void {
    if (this.coinsListService.coinsArr.find(s => s.symbol === symbol)) {
      this.finding = true;
      this.coin = this.coinsListService.coinsArr.find(s => s.symbol === symbol);
      console.log(this.coin);
    }

  }

}

