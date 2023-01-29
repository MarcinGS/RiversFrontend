import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRiverUpdate } from '../admin-river-update/model/adminRiverUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminRiverAddService {

  constructor(private http: HttpClient) { }

  saveNewRiver(river: AdminRiverUpdate): Observable<AdminRiverUpdate>{
    return this.http.post<AdminRiverUpdate>("/api/admin/rivers", river);
  }
}
