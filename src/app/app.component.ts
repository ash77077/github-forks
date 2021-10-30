import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Iguan-Task';
  data: any = []


  constructor(
    public global: GlobalService,
    public router: Router
  ) {
    //
  }

  ngOnInit() {
    setTimeout(() => {
      // this.getDatas()
    }, 2000);

  }

  //  async getDatas(){
  //     this.data = await this.global.getData()
  //     console.log(this.data);

  //   }


}
