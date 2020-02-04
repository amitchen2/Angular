import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs'
import {map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {

  url_suffix = '&site=stackoverflow';
  url_prefix = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=';

  constructor(private http: HttpClient) {
    // Http Options
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getQuestions(tag: string) : Observable<any>{
    let res = this.http.get(this.url_prefix + tag + this.url_suffix);
    // res = res.json();
    //console.log(JSON.stringify(res));
    return res;
  }

}
