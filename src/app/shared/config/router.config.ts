
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AddVideoComponent } from 'src/app/add-video/add-video.component';
import { ShowVideoComponent } from 'src/app/show-video/show-video.component';


export const routes: Routes =
[
    {path: 'home',component: HomeComponent},
    {path: 'add-video',component: AddVideoComponent},
    {path: 'show-video/:id',component: ShowVideoComponent},
    
 ];