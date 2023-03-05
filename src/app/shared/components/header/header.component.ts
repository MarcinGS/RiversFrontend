import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/modules/common/service/jwt.service';
import { UserListIconService } from 'src/app/modules/common/service/user-list-icon.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Rivers Level Monitor";
  userListCounter = "";
  isLoggedIn = false;

  constructor(
    private headerService: HeaderService,
    private userListIconservice: UserListIconService,
    private jwtService: JwtService) { }

  ngOnInit(): void {
    if (this.jwtService.isLoggedIn()) {
    this.getCountUserListItems();
    this.userListIconservice.subject
      .subscribe(count => this.userListCounter = String(count>0 ? count:""));
      this.isLoggedIn =  this.jwtService.isLoggedIn();
    }
  }

  public getCountUserListItems(){
    this.headerService.getCountUserListItems()
      .subscribe(count => this.userListCounter = String(count>0 ? count : ""));
  }

  public logout(){
    this.jwtService.logout();
  }

}
