import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticsDto } from './common/dto/statisticsDto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  update(): Observable<StatisticsDto>{
    return this.http.get<StatisticsDto>("/api/admin/update");
  }
}
