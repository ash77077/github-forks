import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputData: string | any = '';

  constructor(private global: GlobalService) {

  }

  ngOnInit(): void {
    // this.global.getData()
  }
  continue() {
    this.global.count = this.inputData

  }
}
