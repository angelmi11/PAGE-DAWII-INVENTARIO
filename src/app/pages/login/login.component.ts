import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    
  ) {
    this.loginForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required]],
    });

  }

  public onSubmit() {
    const email = this.loginForm.get("email")?.value;
    const password = this.loginForm.get("password")?.value;
    if (email && password) {
      this.authService.login(email, password);
    } else {
    }
  }
}
