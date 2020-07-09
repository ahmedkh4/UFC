import { Component, OnInit } from '@angular/core';
import { VideosService } from '../shared/services/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public videos = [];

  constructor(private videoServices : VideosService ) { }

  ngOnInit(){

    this.videos = this.videoServices.getvideos() ; 
  }

}
