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
  favIds: any = [];

  constructor(
    public global: GlobalService,
    private ngxService: NgxUiLoaderService
  ) {
    //
  }

  ngOnInit(): void {
    this.ngxService.startLoader("loader-01");
    if (this.global.singleUserInfo && this.global.singleUserInfo['id']) {
      this.userId = this.global.singleUserId
      this.user = this.global.singleUserInfo
      this.ngxService.stopLoader("loader-01");
    } else if (localStorage.getItem('su')) {
      this.user = JSON.parse(`${localStorage.getItem('su')}`)
      this.userId = this.user.id
      this.ngxService.stopLoader("loader-01");
    } else {
      setTimeout(() => {
        this.ngxService.stopLoader("loader-01");
        this.ErrorView = true
      }, 2000);
    }
    if (localStorage.getItem('favIds')) {
      let gettedIds = JSON.parse(`${localStorage.getItem('favIds')}`)
      if (gettedIds.length && gettedIds.includes(this.userId)) {
        this.user.isFavorite = true;
      } else {
        this.user.isFavorite = false;
      }
    }
  }

  addToFavorite() {
    if (localStorage.getItem('favIds')) {
      let gettedIds = JSON.parse(`${localStorage.getItem('favIds')}`)
      if (!gettedIds.includes(this.userId)) {
        this.favIds = JSON.parse(`${localStorage.getItem("favIds")}`)
        this.favIds.push(this.userId)
        this.user.isFavorite = true;
        localStorage.setItem('favIds', JSON.stringify(this.favIds))
      } else if (gettedIds.includes(this.userId)) {
        this.favIds = JSON.parse(`${localStorage.getItem("favIds")}`)
        this.favIds = this.favIds.filter((id: any) => id !== this.userId)
        this.user.isFavorite = false;
        localStorage.setItem('favIds', JSON.stringify(this.favIds))
      }
    } else {
      this.favIds.push(this.userId)
      localStorage.setItem('favIds', JSON.stringify(this.favIds))
      this.user.isFavorite = true;
    }
  }

}
