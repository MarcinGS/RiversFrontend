import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root',
})
export class UserItemDetailsService {
  constructor(private http: HttpClient) {}
  
  saveRiverNote(note: Note): Observable<Note> {
    return this.http.post<Note>('/api/note', note);
  }
  
  getRiverNote(userListItemId: number): Observable<Array<Note>> {
    return this.http.get<Array<Note>>('/api/note/' + userListItemId);
  }

  deleteNote(id: number): Observable<void> {
    return this.http.delete<void>('/api/note/' + id);
  }
}
