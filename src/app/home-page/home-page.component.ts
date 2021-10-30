import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  timeOut:boolean = true

  constructor() { 
    setTimeout(() => {
      this.timeOut = false
    }, 5000);
  }


  ngOnInit(): void {
  }

  

}
