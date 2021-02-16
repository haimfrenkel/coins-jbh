import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { coinModel } from 'src/app/models/coin.model';
import { moreInfoModel } from 'src/app/models/moreInfo.model';
import { MoreDataService } from 'src/app/services/more-data.service';
import { RealTimeService } from 'src/app/services/real-time.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  @Input() coin: coinModel;
  moreInfo: moreInfoModel = { pic: null, usd: null, ils: null, eur: null, time: null };
  realTimeList: string[];

  check = false;
  show = false;

  constructor(private moreDataService: MoreDataService, private realTimeService: RealTimeService) {

  }

  ngOnInit(): void {
    this.realTimeService.get().subscribe(res => { this.realTimeList = res; });

  }

  getMoreInfo(): void {
    if (this.show === false) {
      this.show = true;
      if (Date.now() - this.moreInfo.time > 5000) {

        this.moreDataService.get(this.coin.id).subscribe(info => {
          this.moreInfo = ({
            pic: info.image['small'],
            usd: info.market_data.current_price.usd,
            ils: info.market_data.current_price.ils,
            eur: info.market_data.current_price.eur,
            time: Date.now()
          })
        });


      } else {

      }
    } else {
      this.show = false;
    }
  }
  addToRealTime(): void {
    this.check ? false : true;
    if (!this.realTimeList.find(id => id == this.coin.id)) {
      this.realTimeService.add(this.coin.id);
      console.log(this.realTimeList);
    } else {
      this.realTimeService.reduce(this.coin.id);
    }
  }
}
