import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(
    private http: HttpClient,
  ) { }

  async postRegisterUser(formRegister: any) {
    console.log('formRegister', formRegister)

    let resp: any = await this.http.post("/auth/register", formRegister).toPromise()
    console.log('resp', resp)
    if (resp && resp?.token) {
      console.log("se registro")
    }

  }

}
