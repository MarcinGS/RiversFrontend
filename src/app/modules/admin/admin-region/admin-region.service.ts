import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRegionNamesDto } from '../common/dto/adminRegionNameDto';
import { AdminRegion } from './model/adminRegion';

@Injectable({
  providedIn: 'root'
})
export class AdminRegionService {
  
  constructor(private http: HttpClient) { }
  
  getRegions(): Observable<Array<AdminRegionNamesDto>> {
    return this.http.get<Array<AdminRegionNamesDto>>('/api/admin/regions');
  }
  
  getRegion(id: number){
    return this.http.get<AdminRegion>("/api/admin/regions/" + id);  
  }
  
  saveRegion(id: number, value: any): Observable<AdminRegion>{
    return this.http.put<AdminRegion>("/api/admin/regions/" + id, value);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>("/api/admin/regions/" + id);
  }
}
