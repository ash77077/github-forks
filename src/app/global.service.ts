import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  count: number | any = 10;
  singleUserId: number | any;
  singleUserInfo: any;

  constructor(public http: HttpClient) {
    //    
  }

  getData(): Observable<Data> | any {
    const URl = `https://api.github.com/repos/angular/components/forks?page=2&per_page=${this.count}`
    try {
      return this.http.get<Data>(URl)
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
