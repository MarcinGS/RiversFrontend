import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../common/service/jwt.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  loginError = false;
  registerError = false;
  registerErrorMessage = '';
  private readonly REDIRECT_ROUTE = "/rivers";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: res => {
          this.jwtService.setToken(res.token);
          this.router.navigate([this.REDIRECT_ROUTE]);
          this.loginError = false;
        },
        error: (err) => {
          this.loginError = true;
        },
      });
    }
  }

  register() {
    if (
      this.registerForm.valid &&
      this.isPasswordsIdentical(this.registerForm.value)
    ) {
      this.loginService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.jwtService.setToken(res.token);
          this.router.navigate([this.REDIRECT_ROUTE]);
        },
        error: (err) => {
          this.registerError = true;
          if (err.error.message) {
            this.registerErrorMessage = err.error.message;
          } else {
            this.registerErrorMessage =
              'Rejestracja nieudana spróbuj ponownie później';
          }
        },
      });
    }
  }

  isPasswordsIdentical(register: any): boolean {
    if (register.password === register.repeatPassword) {
      this.registerError = false;
      return true;
    }
    this.registerError = true;
    this.registerErrorMessage = 'Hasła nie są identyczne';
    return false;
  }
}
