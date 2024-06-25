import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/modules/common/service/jwt.service';

@Component({
  selector: 'app-fullpageadmin',
  templateUrl: './fullpageadmin.component.html',
  styleUrls: ['./fullpageadmin.component.scss']
})
export class FullpageadminComponent implements OnInit {

  constructor(private jwtService: JwtService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.jwtService.logout();
    this.router.navigate(["/home"]);
    this.snackBar.open('Wylogowano', '', {
      duration: 3000,
      panelClass: 'snack-bar-status-delete',
    });
  }

}
