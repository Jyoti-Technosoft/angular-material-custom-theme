import { Component, OnInit } from '@angular/core';
import { default as Data } from '../../assets/appdata.json';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-my-fav',
  templateUrl: './my-fav.component.html',
  styleUrls: ['./my-fav.component.scss']
})
export class MyFavComponent implements OnInit {

  matRippleColor = 'red'
  constructor(private config: ConfigService) { }
  public appList: any = Data;
  ngOnInit(): void {
    this.config.getData()
      .subscribe((result: any) => {

        this.appList;
        // console.log(this.appList)
      });
    // console.log("data",this.appList);

  }

}
