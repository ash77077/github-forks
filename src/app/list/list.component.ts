import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css',
    '../../../node_modules/@coreui/coreui/dist/css/coreui.min.css'
  ]
})
export class ListComponent implements OnInit {

  UsersInfo: any = [];
  GlobalData: any = [];
  active: boolean = true;
  cp: number = 1;
  isFavorite: boolean = false
  inputData: string = ''

  constructor(
    public global: GlobalService,
    public router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    //
  }

  ngOnInit() {
    if (!this.UsersInfo.length) {
      this.getUsers()
    }
  }

  getUsers() {
    this.UsersInfo.length = 0
    this.ngxService.startLoader("loader-01");
    this.global.count = this.inputData
    this.global.getData().subscribe((data: any) => {
      data.map((item: any) => {
        item.isFavorite = false
        this.UsersInfo.push({
          id: item.id,
          fullName: item.full_name,
          repositories: item.forks_url,
          owner: item.owner.login,
          stars: item.stargazers_count,
          isFavorite: false
        })
        this.ngxService.stopLoader("loader-01");
        this.GlobalData = data
      })
    })
  }

  goMore(id: any) {
    this.global.singleUserId = id
    this.GlobalData.map((user: any) => {
      if (user.id === id) {
        const jsonData = JSON.stringify(user)
        localStorage.setItem('su', jsonData)
        this.global.singleUserInfo = user
        this.router.navigate(['/single-list'])
      }
    })
  }
}
