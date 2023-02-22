import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(
    private cookieService: CookieService,
    private headerService: HeaderService,
    private userListIconservice: UserListIconService) { }

  ngOnInit(): void {
    this.getCountUserListItems();
    this.userListIconservice.subject
      .subscribe(count => this.userListCounter = String(count>0 ? count:""))
  }

  getCountUserListItems(){
    this.headerService.getCountUserListItems(Number(this.cookieService.get("userListId")))
      .subscribe(count => this.userListCounter = String(count>0 ? count:""));
  }

}
