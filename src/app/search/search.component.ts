import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputData: string | any = '';
  constructor(
    private global: GlobalService,
    public router: Router
  ) {
    // 
  }

  ngOnInit(): void {
    //
  }
  continue() {
    if (this.inputData) {
      this.global.userName = this.inputData
      this.router.navigate(['/user'])
    }
  }

  
}
