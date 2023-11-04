import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private authUrl = 'http://localhost:8080/auth/register';

  constructor(
    private http: HttpClient,
  ) { }

  async postRegisterUser(formRegister: any) {

    let resp: any = await this.http.post(this.authUrl, formRegister).toPromise()
    console.log('resp', resp)
    if (resp && resp?.token) {
      console.log("se registro")
    }

  }

}
