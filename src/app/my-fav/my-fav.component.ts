import { Component, OnInit } from '@angular/core';
import {default as Data}  from '../../assets/mydata.json';

@Component({
  selector: 'app-my-fav',
  templateUrl: './my-fav.component.html',
  styleUrls: ['./my-fav.component.css']
})
export class MyFavComponent implements OnInit {

  constructor() { }
  public appList:any= Data;
  ngOnInit(): void {
    console.log("data",this.appList);
    
  }

}
