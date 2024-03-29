import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/common/model/page';
import { AdminRiver } from './model/adminRiver';

@Injectable({
  providedIn: 'root',
})
export class AdminRiverService {
  constructor(private http: HttpClient) {}

  getRivers(page: number, size: number): Observable<Page<AdminRiver>> {
    return this.http.get<Page<AdminRiver>>(
      `/api/admin/rivers?page=${page}&size=${size}`
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/admin/rivers/' + id);
  }
}
