import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurements } from '../common/model/measurements';
import { Page } from '../common/model/page';
import { Note } from './model/note';
import { RiverDetails } from './model/riverDetails';

@Injectable({
  providedIn: 'root'
})
export class RiverDetailsService {

  constructor(private http: HttpClient) { }

  getRiverDetails(id: String): Observable<RiverDetails>{
      return this.http.get<RiverDetails>("/api/rivers/site/" + id);
  }

  getMeasurements(page: number, size: number, id: number): Observable<Page<Measurements>>{
    return this.http.get<Page<Measurements>>(`/api/measurement/${id}/?page=${page}&size=${size}`);
}


  saveRiverNote(note: Note): Observable<Note>{
    return this.http.post<Note>("/api/note", note);
  }
}
