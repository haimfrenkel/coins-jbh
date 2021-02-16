import { Component, Input, OnInit } from '@angular/core';
import { moreInfoModel } from 'src/app/models/moreInfo.model';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
@Input () moreInfo: moreInfoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
