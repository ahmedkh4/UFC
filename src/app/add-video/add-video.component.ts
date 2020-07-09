import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideosService } from '../shared/services/videos.service';
import { Video } from '../shared/models/videos';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

 
  public videoForm : FormGroup ; 
  constructor(private videoBuilder : FormBuilder ,
              public videoservice : VideosService ) { 

                this.videoForm = this.videoBuilder.group(
                  {
                    id : [ '' , [Validators.required]],
                    name : [ '' , [Validators.required]],
                    date : [ '' , [Validators.required]],
                    source : [ '' , [Validators.required ,Validators.min(5) ]],
                    description : [ '' , [Validators.required ,Validators.min(5) ]]
                  }
                )
              }

  ngOnInit(): void {
    
  }
   
 



}
