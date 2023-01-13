import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  dataVideo: any = [];

  constructor(private apiService: VideoService) {}

  ngOnInit() {
    this.dataApi();
  }

  dataApi() {
    this.apiService.getDataApi().subscribe((data: any) => {
      console.log(data);
      this.dataVideo = data;
    });
  }
}
