import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Router } from '@angular/router';
import { JwtService } from '../../common/service/jwt.service';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  
formGroup!: FormGroup;
loginError = false;

  constructor(private formBuilder: FormBuilder,
    private adminLoginService: AdminLoginService,
    private jwtService: JwtService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit(){
    if(this.formGroup.valid){
        this.adminLoginService.login(this.formGroup.value)
        .subscribe({
          next: (response) => {
            this.loginError = false;
            if(response.adminAccess){
              this.jwtService.setToken(response.token);
              this.jwtService.setAdminAccess(true);
              this.snackBar.open('Zalogowano', '', {
                duration: 3000,
                panelClass: 'snack-bar-status-ok',
              });
            }
            this.router.navigate(["/admin"]);
          },
          error: () => this.loginError = true
        })
    }
  }

}