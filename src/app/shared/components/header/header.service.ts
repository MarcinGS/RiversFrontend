import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdto } from './model/userDto';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  constructor(private http: HttpClient) { }
  
  getCountUserListItems(): Observable<Number>{
    return this.http.get<Number>("/api/userlistitems/count/");
  }

  getUserName(): Observable<Userdto> {
    return this.http.get<Userdto>("/api/username/");
  }
}
