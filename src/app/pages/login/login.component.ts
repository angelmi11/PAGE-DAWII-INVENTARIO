import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  },);
  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private authService: AuthService,

  ) { }

  public onSubmit() {
    const username = this.loginForm.get("username")?.value;
    const password = this.loginForm.get("password")?.value;
    if (username && password) {
      this.authService.login(username, password);
    } else {
    }
  }
}
