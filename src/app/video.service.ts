import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Api } from './models/api';

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}

  private datanya(response: any) {
    return response.data;
  }

  public getDataApi(): Observable<Api[]> {
    return this.http.get<Api[]>(`http://localhost:3000/videos`);
  }
}
