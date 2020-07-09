import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { ShowVideoComponent } from './show-video/show-video.component';
import { RouterModule } from '@angular/router';
import { routes } from './shared/config/router.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './shared/pipe/truncate.pipe.ts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomeComponent,
    VideoComponent,
    AddVideoComponent,
    ShowVideoComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
