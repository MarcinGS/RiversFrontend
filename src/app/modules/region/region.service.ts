import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionRivers } from './model/regionRivers';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getRegionWithRivers(name: string, page: number, size: number): Observable<RegionRivers> {
      return this.http.get<RegionRivers>(`/api/regions/${name}/rivers?page=${page}&size=${size}`);
  }
}
