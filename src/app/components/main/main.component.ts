import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public showNotification: boolean;

  dataVideo: any = [];
  constructor(private http: HttpClient, private apiService: VideoService) {
    this.showNotification = true;
  }

  ngOnInit(): void {
    this.dataApi();
  }

  dataApi() {
    this.apiService.getDataApi().subscribe((data: any) => {
      let coba = data,
        length = 7;
      this.dataVideo = Array.prototype.slice.call(coba, 3);
    });
  }

  public onCloseClick(): void {
    this.showNotification = false;
  }
}
