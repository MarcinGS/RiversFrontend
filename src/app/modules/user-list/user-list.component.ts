import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { River } from '../common/model/river';
import { UserListIconService } from '../common/service/user-list-icon.service';
import { UserList } from './model/userList';
import { UserListItem } from './model/userListItem';
import { UserListService } from './user-list.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  userList!: UserList;
  
  constructor(private route: ActivatedRoute,
    private userListService: UserListService,
    private cookieService: CookieService,
    private router: Router,
    private snackBar: MatSnackBar,
    private userListIconservice: UserListIconService
    ) 
    { }

  ngOnInit(): void {
    let riverId = Number(this.route.snapshot.queryParams['riverId']);
    if(riverId > 0){
      this.addToUserList(riverId);
      this.snackBar.open("Rzeka została dodana","",{duration: 3000, panelClass: "snack-bar-status-ok"});
    }else{
      this.getUserList();
    }
  }


  getUserList(){
    let userListId = Number(this.cookieService.get("userListId"));
    if(userListId > 0){
      this.userListService.getUserList(userListId)
      .subscribe(userList => {
        this.userList = userList
        this.userListIconservice.userListChanger(userList.items.length)
      });
    }
  } 

  addToUserList(riverId: number){
    let userListId = Number(this.cookieService.get("userListId"));
    this.userListService.addToUserList(userListId, {riverId: riverId})
    .subscribe(userList => {
      this.userList = userList;
      this.userListIconservice.userListChanger(userList.items.length)
      //Kasuje cookie
      this.cookieService.delete("userListId");
      //Ustawia cookie
      this.cookieService.set("userListId", userList.id.toString(), this.expireDays(3));
      //Przekierowuje do listy
      this.router.navigate(["/userlist"]);
    });
    
  }
  
  expireDays(days: number): Date {
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  }
  
  deleteRiver(riverId: number) {
   this.userListService.deleteRiver(riverId)
   .subscribe(() => this.ngOnInit());
   this.snackBar.open("Rzeka została usunięta","",{duration: 3000, panelClass: "snack-bar-status-delete"});
  }


}
