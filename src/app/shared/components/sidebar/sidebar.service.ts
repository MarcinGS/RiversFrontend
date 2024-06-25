import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarRegion } from './model/sidebarRegion';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  getRegions(): Observable<Array<SidebarRegion>>{
   return this.http.get<Array<SidebarRegion>>("/api/regions");
  }
}
