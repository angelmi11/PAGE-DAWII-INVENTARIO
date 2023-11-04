// auth.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthService {
  private token: string | null = null;
  private authUrl = 'http://localhost:8080/auth/login';

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private router: Router) { }

  async login(username: string, password: string) {
    const body = { username, password };
    let resp: any = await this.http.post(this.authUrl, body).toPromise()
    if (resp && resp?.token) {
      this.token = resp?.token
      this.sessionService.update(resp?.token)
      this.router.navigate(['/dashboard']);
    }
    return;
  }

  isAuthenticated(): boolean {
    this.token = this.sessionService.load()
    return this.token ? true : false;
  }

  getToken(): string | null {
    return this.token;
  }

  logout(): void {
    this.token = null;
  }
}
