import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IReqBranchOffice, IResBranchOffice } from '../models/branch-office.model';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {
  private url: string = "http://localhost:8080/api/v1/branch"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async post(branchOffice: IReqBranchOffice) {
    let resp: any = await this.http.post(this.url, branchOffice).toPromise()
  }

  public async id(id: number) {
    let resp = await this.http.get<IResBranchOffice>(this.url + `/${id}`).toPromise()
    return resp
  }

  public async put(branch: IReqBranchOffice, id: number) {
    let resp = await this.http.put<IResBranchOffice>(this.url + `/${id}`, branch).toPromise()

  }

  public async get() {
    let resp = await this.http.get<IResBranchOffice[]>(this.url).toPromise()
    return resp
  }
}
