import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListIconService {
  subject: Subject<Number> = new Subject();

  constructor() { }

  userListChanger(counter: number){
    this.subject.next(counter);
  }
}
