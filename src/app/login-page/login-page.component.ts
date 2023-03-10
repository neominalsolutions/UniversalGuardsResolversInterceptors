import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRequest, ILoginResponse, LoginService } from './login.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  /**
   *
   */
  constructor(
    private gs: FormBuilder,
    private lg: LoginService,
    private r: Router
  ) {}

  loginForm: FormGroup = this.gs.group({
    email: ['eve.holt@reqres.in'],
    password: ['cityslicka'],
  });

  onSubmit() {
    this.lg.login(this.loginForm.value as ILoginRequest).subscribe({
      next: (response: ILoginResponse) => {
        localStorage.setItem('token', response.token);
        this.r.navigate(['dashboard']);
      },
    });
  }
}
