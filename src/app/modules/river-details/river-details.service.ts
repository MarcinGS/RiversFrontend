import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './model/note';
import { RiverDetails } from './model/riverDetails';

@Injectable({
  providedIn: 'root'
})
export class RiverDetailsService {

  constructor(private http: HttpClient) { }

  getRiverDetails(stationId: String): Observable<RiverDetails>{
      return this.http.get<RiverDetails>("/api/rivers/" + stationId);
  }

  saveRiverNote(note: Note): Observable<Note>{
    return this.http.post<Note>("/api/note", note);
  }
}
