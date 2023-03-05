import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from './model/userList';
import { UserListItem } from './model/userListItem';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  
  constructor(private http: HttpClient) { }
  
  getUserList(): Observable<UserList>{
    return this.http.get<UserList>("/api/userlist/");
  }
  
  addToUserList(riverId: any ): Observable<UserList>{
    return this.http.put<UserList>("/api/userlist/", riverId);
  }

  deleteRiver(userListId: number): Observable<void> {
    return this.http.delete<void>("/api/userlistitems/" + userListId);
  }
} 

