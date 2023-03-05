import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListIconService } from '../common/service/user-list-icon.service';
import { UserList } from './model/userList';
import { UserListService } from './user-list.service';
import { Location } from '@angular/common';
import { JwtService } from '../common/service/jwt.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList!: UserList;
  private isRiverAdded = false;
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private userListService: UserListService,
    private jwtService: JwtService,
    private snackBar: MatSnackBar,
    private userListIconservice: UserListIconService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.jwtService.isLoggedIn();
    let riverId = Number(this.route.snapshot.queryParams['riverId']);
    if (this.jwtService.isLoggedIn()) {
      if (riverId > 0) {
        this.addToUserList(riverId);
        this.snackBar.open('Rzeka została dodana', '', {
          duration: 3000,
          panelClass: 'snack-bar-status-ok',
        });
        this.isRiverAdded = true;
      } else {
        this.getUserList();
        this.isRiverAdded = false;
      }
    }
  }

  getUserList() {
    this.userListService.getUserList().subscribe((userList) => {
      this.userList = userList;
      this.userListIconservice.userListChanger(userList.items.length);
    });
  }

  addToUserList(riverId: number) {
    this.userListService
      .addToUserList({ riverId: riverId })
      .subscribe((userList) => {
        this.userList = userList;
        this.userListIconservice.userListChanger(userList.items.length);
      });
  }
  deleteRiver(riverId: number) {
    this.userListService.deleteRiver(riverId).subscribe(() => this.ngOnInit());
    this.snackBar.open('Rzeka została usunięta', '', {
      duration: 3000,
      panelClass: 'snack-bar-status-delete',
    });
  }

  back() {
    this.location.historyGo(this.isRiverAdded ? -2 : -1);
  }
}
