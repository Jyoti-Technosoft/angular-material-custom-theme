import { Component, OnInit } from '@angular/core';
import { default as Data } from '../../assets/appdata.json';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.scss']
})
export class MyAppsComponent implements OnInit {

  constructor(public dialog: MatDialog, private config: ConfigService) { }
  public appList: any = Data;

  async ngOnInit() {
    await this.config.getData().subscribe((result: any) => {
      console.log("result==>>", result);
      this.appList;
      // console.log(this.appList)
    });
    // console.log("data",this.appList);
  }

  openDialog(appname: string, version: string, image: string): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      data: { name: appname, appversion: version, appimage: image }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  download(appname: string, version: string) {
    // $event.stopPropagation();
    console.log("yes");
  }

}
