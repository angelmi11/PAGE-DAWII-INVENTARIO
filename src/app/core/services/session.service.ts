import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })
export class SessionService {
  public appSession: any = "";
  private STORAGE_KEY = 'SS';

  constructor(
    private router: Router
  ) {
    this.load();
  }

  public load() {
    const resp = localStorage.getItem(this.STORAGE_KEY);
    if (resp) {
      return this.appSession = JSON.parse(resp)
    }
  }

  public update(sessionPayload: string) {
    this.appSession = sessionPayload;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.appSession));
  }

  public clear() {

  }

}
