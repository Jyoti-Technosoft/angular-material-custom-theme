import { Component } from '@angular/core';
import {default as Data}  from '../assets/mydata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flexion';
  public appList:any= Data;
  
  constructor(){
    console.log("data",this.appList);
  }
  
}
