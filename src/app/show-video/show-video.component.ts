import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser' ;
import { Video } from '../shared/models/videos';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer , private route: ActivatedRoute) { }
  @Input() video : Video

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  getsource(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video.source  )
  }



}
