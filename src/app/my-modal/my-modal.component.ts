import { Component, Inject, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  appversion: string;
  name: string;
  appimage:string;
}

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {
  public favouriteApp:any =[{}];
  
  @Input()
  selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(public dialogRef: MatDialogRef<MyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  public toggleSelected(appname:string,appimage:string,version:string) {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    if(this.selected) {

      // favouriteApp.push({favappname: appname, favappimage: appimage , favversion: version});
      console.log(this.favouriteApp);
    }    
  }
  
}
