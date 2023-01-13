import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { PeopleVideoComponent } from './components/people-video/people-video.component';
import { SidebarmenuComponent } from './components/sidebarmenu/sidebarmenu.component';
import { VideoService } from './video.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FooterComponent,
    DocumentsComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    PeopleVideoComponent,
    SidebarmenuComponent,
    VideosComponent,
  ],
  providers: [VideoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
