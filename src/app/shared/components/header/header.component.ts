import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/modules/common/service/jwt.service';
import { UserListIconService } from 'src/app/modules/common/service/user-list-icon.service';
import { HeaderService } from './header.service';
import { Userdto } from './model/userDto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Rivers Level Monitor";
  userListCounter = "";
  isLoggedIn = false;
  userName: Userdto | undefined;

  constructor(
    private headerService: HeaderService,
    private userListIconservice: UserListIconService,
    private jwtService: JwtService) { }
    
    ngOnInit(): void {
      this.isLoggedIn =  this.jwtService.isLoggedIn();
      if (this.isLoggedIn) {
        this.getUserName();
        this.getCountUserListItems();
        this.userListIconservice.subject
        .subscribe(count => this.userListCounter = String(count>0 ? count:""));
      }
    }

  public getCountUserListItems(){
    this.headerService.getCountUserListItems()
      .subscribe(count => this.userListCounter = String(count>0 ? count : ""));
  }

  public logout(){
    this.jwtService.logout();
    this.ngOnInit();
    this.userListCounter = "";
  }

  public getUserName(){
    this.headerService.getUserName()
    .subscribe(username => this.userName = username);

  }

}
