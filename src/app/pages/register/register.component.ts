import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  public submitted = false;

  public registrationForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
/*     confirmPassword: ['', [Validators.required]],
 */  });

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {

  }


  /*  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
     console.log('matchPassword function called');
     const password = control.get('password');
     const confirmPassword = control.get('confirmPassword');
     console.log('password:', password);
     console.log('confirmPassword:', confirmPassword);
   
     if (!password || !confirmPassword) {
       return null;
     }
   
     return password.value === confirmPassword.value ? null : { mismatch: true };
   } */

  onSubmit() {
    if (this.registrationForm.invalid) return
    this.registerService.postRegisterUser({ ...this?.registrationForm?.value, status: "activo" })
  }
}