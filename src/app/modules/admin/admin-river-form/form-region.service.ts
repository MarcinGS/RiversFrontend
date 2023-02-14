import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRegionNamesDto } from '../common/dto/adminRegionNameDto';

@Injectable({
  providedIn: 'root',
})
export class FormRegionService {
  constructor(private http: HttpClient) {}

  getRegions(): Observable<Array<AdminRegionNamesDto>> {
    return this.http.get<Array<AdminRegionNamesDto>>('/api/admin/regions');
  }
}
