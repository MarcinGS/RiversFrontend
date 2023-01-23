import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { River } from './model/river';

@Injectable({
  providedIn: 'root'
})
export class RiverService {

  constructor(private http: HttpClient) { }

  getRivers(): Observable<River[]>{
    return this.http.get<River[]>("/api/rivers")
  }
}
