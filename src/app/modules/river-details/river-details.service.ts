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

  getRiverDetails(id: String): Observable<RiverDetails>{
      return this.http.get<RiverDetails>("/api/admin/rivers/site/" + id);
  }

  saveRiverNote(note: Note): Observable<Note>{
    return this.http.post<Note>("/api/note", note);
  }
}
