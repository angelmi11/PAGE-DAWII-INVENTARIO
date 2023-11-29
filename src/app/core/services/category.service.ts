import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IReqCategory, IResCategory } from '../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = "http://localhost:8080/api/v1/category"
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async post(category: IReqCategory) {
    let resp = await this.http.post(this.url, category).toPromise()
  }


  public async get() {
    let resp = await this.http.get<IResCategory[] | []>(this.url).toPromise()
    return resp
  }

  public async id(id: number) {
    let resp = await this.http.get<IResCategory>(this.url + `/${id}`).toPromise()
    return resp
  }

  public async put(category: IReqCategory, id: number) {
    let resp = await this.http.put<IResCategory>(this.url + `/${id}`, category).toPromise()

  }

}
