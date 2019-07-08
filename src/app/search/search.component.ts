import { Component, OnInit } from '@angular/core';
import { YoutubeserviceService } from '../youtubeservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public videos:any;
  constructor(private youtubeservice: YoutubeserviceService) { }

  ngOnInit() {

}
log(value) {
   this.youtubeservice.getdatafrom(value);
   this.youtubeservice
   .getVideosForChanel()
   .subscribe(list => 
     {console.log(list);
     this.videos = list});
}


}
