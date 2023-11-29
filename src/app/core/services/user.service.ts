import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/purchase-order.model';
import { IUserRoot } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8080/api/v1/user"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  public async get() {
    return await this.http.get<IUserRoot>(this.url).toPromise()
  }
}
