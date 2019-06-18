import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// services
import { IpsUserService } from './services/ipUser.service';
import { ConnectionService } from './services/connection.service';
// 

// elements
import { DialogContentExampleDialog } from './elements/dialogWelcome/dialog-welcome.component';
// 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  status: boolean;
  value: boolean;

  constructor(
    private ipUserService: IpsUserService,
    public dialog: MatDialog,
  ) {
  }


  ngOnInit() {

    this.ipUserService.getIpUser().subscribe(
      res => console.log(res),
      err => {
        let tmp = err.error['text'].split(":");
        let tmp1 = tmp[1].split("(").join(' ').split(')').join(' ').split('}').join('').split('"')
        this.ipUserService.createIpUser({ "ip": tmp1[1] }).subscribe(
          (res: any) => {
            localStorage.setItem('tokenIpClient', res.tokenIp);
          },
          err => console.log(err)
        );
      }
    );

    if (!localStorage.getItem('tokenDialog')) {
      setTimeout(() => {
        this.openDialog();
      }, 2000);
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.setItem("tokenDialog", 'true');
      }
    });

  }

}