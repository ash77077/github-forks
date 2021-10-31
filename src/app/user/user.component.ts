import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  ErrorView: boolean = false;

  constructor(
    public global: GlobalService,
    private ngxService: NgxUiLoaderService
  ) {
  }

  ngOnInit(): void {
    this.ngxService.startLoader("loader-01");
    if (this.global.userName) {
      this.global.getUser().subscribe(data => {
        const jsonData = JSON.stringify(data)
        localStorage.setItem('ur', jsonData)
        this.user = data
        this.ngxService.stopLoader("loader-01");
      })
    } else if (localStorage.getItem('ur') && JSON.parse(`${localStorage.getItem('ur')}`)) {
      this.user = JSON.parse(`${localStorage.getItem('ur')}`)
      this.ngxService.stopLoader("loader-01");
    } else {
      setTimeout(() => {
        this.ngxService.stopLoader("loader-01");
        this.ErrorView = true
      }, 2000);
    }
  }
}
