import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnInit {

  userId: number | any;
  user: any;
  ErrorView: boolean = false;
  isFavorite: boolean = false;

  constructor(
    public global: GlobalService,
    private ngxService: NgxUiLoaderService
  ) {
    //
  }

  ngOnInit(): void {
    this.ngxService.startLoader("loader-01");
    if (this.global.singleUserInfo && this.global.singleUserInfo['id']) {
      this.user = this.global.singleUserInfo
      this.ngxService.stopLoader("loader-01");
    } else if (localStorage.getItem('su')) {
      alert('This is the last viewed user')
      this.user = JSON.parse(`${localStorage.getItem('su')}`)
      this.userId = this.user.id
      this.ngxService.stopLoader("loader-01");
    } else {
      setTimeout(() => {
        this.ngxService.stopLoader("loader-01");
        this.ErrorView = true
      }, 2000);
    }
  }

  addToFavorite() {
    this.user.isFavorite = !this.user.isFavorite
    console.log(this.user);
    
    // this.GlobalData.filter((elem: any, idx: number) => {
    //   if (elem.id === id) {
    //     elem.isFavorite = !elem.isFavorite
    //     this.UsersInfo[idx].isFavorite = this.GlobalData[idx].isFavorite
    //   }
    // })

  }

}
