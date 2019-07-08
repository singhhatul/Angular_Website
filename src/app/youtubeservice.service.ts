import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeserviceService {
  public Data: Subject<any>;

  constructor(private http:HttpClient) {
    this.Data = new Subject();
  }
  getdatafrom(value) {
    this.Data=value;
  }
  getVideosForChanel(): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyA0Cptv6-2F4cpvI_2YpUIVr4dGov7gj7I&q='+ this.Data +'&part=snippet';
    return this.http.get(url);
     
  }
}
