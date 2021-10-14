import { Component, OnInit } from '@angular/core';
import {default as Data}  from '../../assets/appdata.json';

@Component({
  selector: 'app-my-fav',
  templateUrl: './my-fav.component.html',
  styleUrls: ['./my-fav.component.scss']
})
export class MyFavComponent implements OnInit {

  matRippleColor = 'red'
  constructor() { }
  public appList:any= Data;
  ngOnInit(): void {
    console.log("data",this.appList);
    
  }

}
