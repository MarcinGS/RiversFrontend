import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRiverUpdate } from '../model/adminRiverUpdate';
import { UploadResponse } from '../model/uploadResponse';

@Injectable({
  providedIn: 'root',
})
export class AdminRiverUpdateService {
  constructor(private http: HttpClient) {}

  getRiver(id: number): Observable<AdminRiverUpdate> {
    return this.http.get<AdminRiverUpdate>('/api/admin/rivers/' + id);
  }

  savePost(id: number, value: AdminRiverUpdate) {
    return this.http.put<AdminRiverUpdate>('/api/admin/rivers/' + id, value);
  }

}
