import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { River } from './model/river';

@Injectable({
  providedIn: 'root'
})
export class RiverService {

  constructor(private http: HttpClient) { }

  getRivers(page: number, size: number): Observable<Page<River>>{
    return this.http.get<Page<River>>(`/api/rivers?page=${page}&size=${size}`);
  }
}
