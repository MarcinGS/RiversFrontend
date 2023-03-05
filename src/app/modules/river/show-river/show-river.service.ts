import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurements } from '../../common/model/measurements';
import { Page } from '../../common/model/page';
import { RiverDetails } from '../../river-details/model/riverDetails';

@Injectable({
  providedIn: 'root'
})
export class ShowRiverService {


  constructor(private http: HttpClient) { }

  getRiverDetails(id: String): Observable<RiverDetails> {
    return this.http.get<RiverDetails>('/api/rivers/site/' + id);
  }

  getMeasurements(
    page: number,
    size: number,
    id: number
  ): Observable<Page<Measurements>> {
    return this.http.get<Page<Measurements>>(
      `/api/measurement/${id}/?page=${page}&size=${size}`
    );
  }
}
