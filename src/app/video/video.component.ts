import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../shared/models/videos';
import {DomSanitizer } from '@angular/platform-browser' ;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() video:Video ; 
  constructor( private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }

  getsource(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video.source  )
  }

  getid(video) {
    alert('/show-video/:'+this.video.id) ;
    return '/show-video/:'+this.video.id ;
  }

}
