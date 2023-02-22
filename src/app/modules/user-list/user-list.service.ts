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

  getUserList(id: number): Observable<UserList>{
    return this.http.get<UserList>("/api/userlist/" + id);
  }

  addToUserList(userListId: number, riverId: any ): Observable<UserList>{
    return this.http.put<UserList>("/api/userlist/" + userListId, riverId);
  }
}

