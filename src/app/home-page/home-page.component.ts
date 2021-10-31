import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  timeOut: boolean = true
  type: any = 'countUsers'
  constructor() {
    if (!localStorage.getItem('hay')) {
      setTimeout(() => {
        this.timeOut = false
        localStorage.setItem('hay', "1")
      }, 5000);
    } else {
      this.timeOut = false;
    }
  }

  ngOnInit(): void {
    //
  }

}
